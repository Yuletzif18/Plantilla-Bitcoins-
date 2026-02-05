import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-winncoins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winncoins.html',
  styleUrls: ['./winncoins.css']
})
export class WincoinsComponent {
  title = 'Acerca de WinCoins';

  caracteristicas = [
    {
      titulo: '¿Qué son los WinCoins?',
      descripcion: 'Son puntos digitales que acumulas con cada compra en comercios aliados y que puedes redimir por descuentos, productos o servicios.'
    },
    {
      titulo: 'Válidos por 24 meses',
      descripcion: 'Tus WinCoins no vencen rápidamente. Tienes 2 años para acumular y redimir todos tus puntos.'
    },
    {
      titulo: 'Transferibles',
      descripcion: 'Puedes transferir tus WinCoins a otros usuarios de Winners de forma gratuita.'
    },
    {
      titulo: 'Valor: $0.01 USD por moneda',
      descripcion: 'Cada WinCoin equivale a aproximadamente $0.01 USD según el comercio y la promoción.'
    }
  ];

  preguntas = [
    {
      pregunta: '¿Cómo acumulo WinCoins?',
      respuesta: 'Cada vez que compras en un comercio aliado, automáticamente acumulas WinCoins en tu cuenta. La cantidad depende del comercio y la promoción vigente.'
    },
    {
      pregunta: '¿Dónde puedo redimir mis WinCoins?',
      respuesta: 'Puedes redimir tus WinCoins en cualquiera de nuestros comercios aliados. Busca el logo de Winners en el negocio o en la app.'
    },
    {
      pregunta: '¿Hay algún costo para redimir?',
      respuesta: 'No, redimir tus WinCoins es completamente gratis. Sin comisiones, sin cargos ocultos.'
    },
    {
      pregunta: '¿Puedo combinar WinCoins con dinero?',
      respuesta: 'Sí, puedes pagar el 100% con WinCoins, combinarlos con dinero, o solo usar dinero y seguir acumulando puntos.'
    }
  ];
}
