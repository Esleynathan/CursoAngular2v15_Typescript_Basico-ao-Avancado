import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor (private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res, 
      error => console.log(error)
      );
    
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você esta adicionando ${res.nome}`);
        return this.foodList.push(res);
      });
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

}
