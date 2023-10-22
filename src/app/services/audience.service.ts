import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudienceService {

  audience=[
    {
      country:'India',
      value:120
    },
    {
      country:'England',
      value:20
    },
    {
      country:'South Africa',
      value:100
    },
    {
      country:'New Zealand',
      value:80
    }
  ]

  constructor() { }

  getAudience(){
    return this.audience
  }
}
