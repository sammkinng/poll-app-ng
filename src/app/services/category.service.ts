import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesList=[
    {
      name:'Action',
      value:150
    },
    {
      name:'Drama',
      value:196
    },
    {
      name:'Sport',
      value:154
    },
    {
      name:'Movie',
      value:13
    },
    {
      name:'Dance',
      value:120
    }
  ];

  constructor() { }

  getCategories(){
    return this.categoriesList;
  }
}
