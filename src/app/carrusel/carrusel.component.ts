import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  propertyBinding = 'white';
  FontSize = '60';
  fraseSierra = [];
  fraseCosta = [];
  fraseOriente = [];
  fraseGalapagos = [];
  frases = [
    {
      "frase":"Recorre sus hermosos paisajes"
    },
    {
      "frase":"Una experiencia única"
    },
    {
      "frase":"La aventura de tu vida"
    },
    {
      "frase":"Una mágica experiencia que nunca olvidarás"
    }
  ]
  constructor() { }
  ngOnInit(): void {
    this.fraseSierra = this.frases.slice(0, 1);
    this.fraseCosta = this.frases.slice(1, 2);
    this.fraseOriente = this.frases.slice(2, 3);
    this.fraseGalapagos = this.frases.slice(3, 4);
}

}
