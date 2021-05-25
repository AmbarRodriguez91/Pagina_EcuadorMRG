import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  fontsize = '50';
  color = 'gray';
  ocultarEcuador = true;
  conoceEcuador = 'Ecuador es un país con muchos lugares fantásticos ¡Que esperas para conocerlos!.';
  constructor() { }

  ngOnInit(): void {
  }
    getConoceEcuador(): string{
      return this.conoceEcuador;
    }
    Ecuador($event): any{
      this.ocultarEcuador = !this.ocultarEcuador;
  }

}
