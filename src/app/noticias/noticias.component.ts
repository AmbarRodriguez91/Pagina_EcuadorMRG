import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  interpolationBinding = 'La ruta del tren';
  propertyBinding = 'blue';

  interpolationBinding1 = 'Yasuní';
  propertyBinding1 = 'blue';

  interpolationBinding2 = 'Galápagos';
  propertyBinding2 = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
