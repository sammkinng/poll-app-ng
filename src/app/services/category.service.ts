import { Injectable } from '@angular/core';
import { Category } from '../components/main/main.component';

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
    return new Promise<Category[]>((res,rej)=>{
      setTimeout(()=>res(this.categoriesList),1000)
    })
  }
}
