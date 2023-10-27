import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(
    public globalState:StateService
  ) {
  
  }
}
