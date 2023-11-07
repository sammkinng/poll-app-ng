import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  params: any={}
  constructor() {
    this.params.color = 'rgb(0,100,100)'
    this.params.background = 'rgb(255,200,150)'
    this.params.lineWidth = 2
    this.params.fontSize = 30
    this.params.codeLength =  6
    this.params.canvasWidth = 150
    this.params.canvasHeight = 50
  }

  image(text:string) {
 
      const canvas = document.createElement('canvas')
      canvas.width = this.params.canvasWidth
      canvas.height = this.params.canvasHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = this.params.background
        ctx.fillRect(0, 0, this.params.canvasWidth, this.params.canvasHeight)
        ctx.fillStyle = this.params.color
        ctx.lineWidth = this.params.lineWidth
        ctx.strokeStyle = this.params.color
        ctx.font = `${this.params.fontSize}px sans`

        // draw two curve lines:
        for (var i = 0; i < 2; i++) {
          ctx.moveTo(Math.floor(0.08 * this.params.canvasWidth), Math.random() * this.params.canvasHeight)
          ctx.bezierCurveTo(Math.floor(0.32 * this.params.canvasWidth), Math.random() * this.params.canvasHeight, Math.floor(1.07 * this.params.canvasHeight), Math.random() * this.params.canvasHeight, Math.floor(0.92 * this.params.canvasWidth), Math.random() * this.params.canvasHeight)
          ctx.stroke()
        }

        // draw text:
        
        text.split('').forEach((char, i) => {
          ctx.setTransform(Math.random() * 0.5 + 1, Math.random() * 0.4, Math.random() * 0.4, Math.random() * 0.5 + 1, this.params.fontSize * i + Math.floor(0.25 * this.params.fontSize), Math.floor(1.25 * this.params.fontSize))
          ctx.fillText(char, 0, 0)
        })
      }
      // save text:
      return canvas.toDataURL()
    
  }

  generateRandomText(length:number) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomText = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomText += charset.charAt(randomIndex);
    }
  
    return randomText;
  }
  

}
