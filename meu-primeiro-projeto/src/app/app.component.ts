import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->


    <app-diretivas-atributos> 
      <h1>Aulas de Diretivas de Atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>
    
    <app-diretivas-atributos> 
      <h1>Ésley Nathan</h1>
      <h3>Camila Nascimento</h3>
    </app-diretivas-atributos>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public destruir:boolean = true;

  constructor() { }
  
  ngOnInit(): void { }
}

