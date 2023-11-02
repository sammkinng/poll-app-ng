import { Component, Input } from '@angular/core';
import { Option } from 'src/app/pages/main/main.component';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() options:Option[]=[]
}
