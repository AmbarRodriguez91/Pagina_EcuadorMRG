import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  propertyBinding = 'white';
  FontSize = '60';
  constructor() {
  }

  ngOnInit(): void {
  }

}
