import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = "Esley!";
  public idade: number = 29;  
  public maisUm: number = 1;
  
  public checkedDisabled: boolean = false;

  public imgSrc: string = "https://w7.pngwing.com/pngs/1014/365/png-transparent-angular-js-full-logo-tech-companies.png";

  public imgTitle: string = 'Angular';
}
