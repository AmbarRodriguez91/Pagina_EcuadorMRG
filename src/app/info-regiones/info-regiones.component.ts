import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-regiones',
  templateUrl: './info-regiones.component.html',
  styleUrls: ['./info-regiones.component.css']
})
export class InfoRegionesComponent implements OnInit {

  infoCosta = 'Las tonalidades azules que rodean la costa del Pacifico de Ecuador atraen a muchos viajeros procedentes ' +
    'de las regiones montañosas del país. La costa árida ofrece a las visitantes playas hermosas, una gran diversidad de ' +
    'vida marina y mariscos frescos.';
  escondidoCosta = true;
  colorTexto = 'darkblue';
  infoSierra = 'Se caracteriza por sus impresionantes elevaciones montañosas, volcanes y nevados. Entre los más importantes están ' +
    'el Cotopaxi y el Chimborazo. Sus 11 provincias cuentan con ciudades de gran importancia histórica como Quito, Cuenca, Riobamba,' +
    ' Ambato y Loja, y centros artesanales como Otavalo. Igualmente, existen varios parques nacionales con flora y fauna muy ricas' +
    ' y variadas.';
  escondidoSierra = true;
  infoAmazonia = 'En la Amazonia, 20 especies de plantas suplen el 90 por ciento de la demanda mundial. Existen ocho mil especies ' +
    'de plantas medicinales, 85 especies de peces, 47 anfibios y reptiles, 95 aves y 80 especies de mamíferos en peligro de ' +
    'extinción, donde vive el 70 por ciento de las 25 mil especies de plantas vasculares que existen en el planeta. Los microclimas' +
    ' auxilian al desarrollo de hermosas especies vegetales y animales, muchas endémicas.';
  escondidoAmazonia = true;
  infoInsular = 'Las Islas Galápagos, conocidas alrededor del mundo como las “Islas Encantadas”, fueron declaradas Patrimonio Natural de ' +
    'la Humanidad, por la UNESCO en 1978. Además de otros reconocimientos, han sido consideradas por los lectores de la revista USA' +
    ' Today. como el primer destino que ver antes de morir.';
  escondidoInsular = true;
  constructor() { }

  ngOnInit(): void {
  }

  getInfoCosta(): string{
    return this.infoCosta;
  }
  pulsadoCosta($event): any{
    this.escondidoCosta = !this.escondidoCosta;
  }

  getInfoSierra(): string{
    return this.infoSierra;
  }
  pulsadoSierra($event): any{
    this.escondidoSierra = !this.escondidoSierra;
  }

  getInfoAmazonia(): string{
    return this.infoAmazonia;
  }
  pulsadoAmazonia($event): any{
    this.escondidoAmazonia = !this.escondidoAmazonia;
  }

  getInfoInsular(): string{
    return this.infoInsular;
  }
  pulsadoInsular($event): any{
    this.escondidoInsular = !this.escondidoInsular;
  }
}
