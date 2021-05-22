import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  FontSize = '50';
  color = 'gray';
  escondidoEcuador = true;
  conoceEcuador = 'Ecuador es un país con muchos lugares fantásticos que te invitamos a conocer.';
  constructor() { }

  ngOnInit(): void {
  }
    getConoceEcuador(): string{
      return this.conoceEcuador;
    }
    Ecuador($event): any{
      this.escondidoEcuador = !this.escondidoEcuador;
  }

}
