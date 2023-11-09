import { Injectable } from '@angular/core';

type PieChartData = {
  name: string;
  value: number;
};

type BarGraphData = {
  labels: string[];
  values: number[];
  xAxisLabel: string;
  yAxisLabel: string;
  title: string;
};

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  drawPieChart(data: PieChartData[]) {
    const canvas = document.createElement('canvas')
    canvas.width = 500
    canvas.height = 300
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas 2D context is not supported.');
      return;
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    let startAngle = 0;

    const sortedData = [...data].sort((a, b) => b.value - a.value);

    sortedData.forEach((segment, index) => {
      const percentage = segment.value;
      const endAngle = (Math.PI * 2 * percentage) / 100 + startAngle;

      // Draw the pie segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = this.getRandomColor(); // Function to get a random color
      ctx.fill();

      // Draw a label for each segment
      const midAngle = (startAngle + endAngle) / 2;
      const labelRadius = percentage > 2 ? radius * 0.7 : radius * 1.2; // Adjust the threshold and distance
      const labelX = centerX + Math.cos(midAngle) * labelRadius;
      const labelY = centerY + Math.sin(midAngle) * labelRadius;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText(`${segment.name} (${percentage}%)`, labelX, labelY);

      // Update the starting angle for the next segment
      startAngle = endAngle;


    });
    return canvas.toDataURL()
  }

  
 
  createBarGraph( data: BarGraphData,barGap:number){
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 400
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
  
    const chartArea = {
      top: 30,
      right: 60,
      bottom: 40,
      left: 50,
    };
  
    const chartHeight = canvas.height - chartArea.top - chartArea.bottom;
  
    // Sort the data
    const sortedData = data.labels
      .map((label, index) => ({ label, value: data.values[index] }))
      .sort((a, b) => b.value - a.value);
  
    // Display only the top 5 values, combine the rest into "Others"
    const displayData = sortedData.length > 6 ? sortedData.slice(0, 5) : sortedData;
  
    

    let maxValue = Math.max(...data.values);
    if (sortedData.length > 6) {
      const othersValues = sortedData.slice(5);
      const othersTotal = othersValues.reduce((total, val) => total + val.value, 0);
      
      maxValue=Math.max(maxValue,othersTotal)
    }
    const yScale = chartHeight / maxValue;

  // Determine Y-axis values dynamically based on distribution
  const yAxisValues = Array.from({ length: 6 }, (_, i) => Math.round((i / 5) * maxValue));

  

  // Draw Y-axis values
  yAxisValues.forEach((value, index) => {
    const y = canvas.height - chartArea.bottom - index * (chartHeight / 5);
    ctx.fillStyle = '#000';
    ctx.textAlign = 'right';
    ctx.fillText(value.toString(), chartArea.left - 10, y + 5);
  });
  
    // Draw X-axis arrow
    ctx.beginPath();
    ctx.moveTo(chartArea.left , canvas.height - chartArea.bottom);
    ctx.lineTo(canvas.width - chartArea.right + 10, canvas.height - chartArea.bottom);
    ctx.lineTo(canvas.width - chartArea.right - 5, canvas.height - chartArea.bottom - 5);
    ctx.moveTo(canvas.width - chartArea.right + 10, canvas.height - chartArea.bottom);
    ctx.lineTo(canvas.width - chartArea.right - 5, canvas.height - chartArea.bottom + 5);
    ctx.strokeStyle = '#000';
    ctx.stroke();
  
    // Draw Y-axis arrow
    ctx.beginPath();
    ctx.moveTo(chartArea.left, canvas.height - chartArea.bottom );
    ctx.lineTo(chartArea.left, chartArea.top - 35);
    ctx.lineTo(chartArea.left - 5, chartArea.top - 15);
    ctx.moveTo(chartArea.left + 5, chartArea.top -15);
    ctx.lineTo(chartArea.left, chartArea.top - 35);
    ctx.strokeStyle = '#000';
    ctx.stroke();
  
    // Draw the bars
    displayData.forEach((bar, index) => {
      const x = chartArea.left +barGap+ index * (barGap + barGap);
      const y = canvas.height - chartArea.bottom - bar.value * yScale;
  
      ctx.fillStyle = this.getRandomColor();
      ctx.fillRect(x, y, barGap, bar.value * yScale);
  
      // Draw labels
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.fillText(bar.label, x + barGap / 2, canvas.height - chartArea.bottom + 15);
    
      ctx.fillText(bar.value.toString(), x + barGap / 2, y - 5);

    });
  
    // Draw the "Others" bar if applicable
    if (sortedData.length > 6) {
      const othersValues = sortedData.slice(5);
      const othersTotal = othersValues.reduce((total, val) => total + val.value, 0);
  
      const othersBarHeight = othersTotal * yScale;
      const othersBarX = chartArea.left +barGap+ 5 * (barGap + barGap);
  
      ctx.fillStyle = this.getRandomColor();
      ctx.fillRect(othersBarX, canvas.height - chartArea.bottom - othersBarHeight, barGap, othersBarHeight);
  
      // Draw label for "Others"
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.fillText('Others', othersBarX + barGap / 2, canvas.height - chartArea.bottom + 15);
   
      ctx.fillText(othersTotal.toString(), othersBarX + barGap / 2, canvas.height - chartArea.bottom - othersBarHeight - 5);

    }
  
    // Draw X-axis label
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(data.xAxisLabel, canvas.width / 2, canvas.height - 5);
  
    // Draw Y-axis label
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText(data.yAxisLabel, 0, 0);
    ctx.restore();
  
    // Draw title
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px Arial';
    ctx.fillText(data.title, canvas.width / 2, 15);

    return canvas.toDataURL()
  }
  
}
