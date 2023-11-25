import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

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

  constructor(
    private fs:FirestoreService
  ) { }

  async getAudience() {
    return await this.fs.getAudiences()
  }
}
