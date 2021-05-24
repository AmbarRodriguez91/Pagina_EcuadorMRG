import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  interpolationBinding = 'Suscríbete Aquí';
  propertyBinding = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  enviar($event){
    console.log($event);
  }

}
