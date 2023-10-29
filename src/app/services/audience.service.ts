import { Injectable } from '@angular/core';
import { Audience } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class AudienceService {

  audience = [
    {
      country: 'India',
      value: 120
    },
    {
      country: 'England',
      value: 20
    },
    {
      country: 'South Africa',
      value: 100
    },
    {
      country: 'New Zealand',
      value: 80
    }
    ,
    {
      country: 'Australia',
      value: 8
    },
    {
      country: 'Sri Lanka',
      value: 180
    }
  ]

  constructor() { }

  getAudience() {
    return new Promise<Audience[]>((resolve, reject) => {
      setTimeout(() => resolve(this.audience), 500)
    })
  }
}
