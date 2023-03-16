import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade:number}> = [
    { nome: "Ésley Nathan", idade: 29},
    { nome: "Érika Dayse", idade: 34},
    { nome: "Camila Nascimento", idade: 26},
  ]

  constructor() { }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

}
