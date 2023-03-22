import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo",
    "Creatina",
  ];

  constructor() { }

  public foodList(){
    return this.list;
    
  }
}
