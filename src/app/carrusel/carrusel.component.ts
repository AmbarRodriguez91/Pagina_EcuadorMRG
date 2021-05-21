import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  propertyBinding = 'beige';
  interpolationBinding = '';
  Regiones: any[] = [
    {name: 'Sierra',
      img: 'assets/sierra.webp',
      desc: 'Recorre los hermosos paisajes de la Sierra',
    },
    {name: 'Costa',
      img: 'assets/costa.jpg',
      desc: 'La mejor experiencia que puedes tener'
    },
    {name: 'Oriente',
      img: 'assets/oriente.jpg',
      desc: 'La aventura te espera'
    },
    {name: 'Galapagos',
      img: 'assets/galapagos.jpg',
      desc: 'Una mágica travesía te espera'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
