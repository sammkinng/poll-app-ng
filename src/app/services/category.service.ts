import { Injectable } from '@angular/core';
import { Category } from '../pages/main/main.component';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesList = [
    {
      name: 'Action',
      value: 150
    },
    {
      name: 'Drama',
      value: 196
    },
    {
      name: 'Sport',
      value: 154
    },
    {
      name: 'Movie',
      value: 13
    },
    {
      name: 'Dance',
      value: 120
    }
  ];

  constructor(
    private fs:FirestoreService
  ) { }

  async getCategories() {
    return await this.fs.getCategories()
  }
}
