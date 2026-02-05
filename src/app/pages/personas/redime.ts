import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redime.html',
  styleUrls: ['./redime.css']
})
export class RedimeComponent {
  titulo = 'Redime WinCoins';
  
  opciones = [
    {
      titulo: 'Descuentos en comercios',
      descripcion: 'Usa tus WinCoins como descuento en tus compras. El valor varía según el comercio.',
      icono: 'fa-solid fa-tag'
    },
    {
      titulo: 'Productos gratuitos',
      descripcion: 'Canjea tus puntos por productos completos sin costo adicional.',
      icono: 'fa-solid fa-gift'
    },
    {
      titulo: 'Servicios especiales',
      descripcion: 'Acceso a servicios premium y ofertas exclusivas para miembros Winners.',
      icono: 'fa-solid fa-crown'
    },
    {
      titulo: 'Transferencias',
      descripcion: 'Transfiere tus WinCoins a otros usuarios o familiares.',
      icono: 'fa-solid fa-exchange'
    }
  ];

  pasos = [
    {
      numero: 1,
      titulo: 'Abre Winners',
      descripcion: 'Accede a tu cuenta en la aplicación Winners'
    },
    {
      numero: 2,
      titulo: 'Selecciona Redime',
      descripcion: 'Elige la opción de canjear o redimir tus WinCoins'
    },
    {
      numero: 3,
      titulo: 'Elige la opción',
      descripcion: 'Selecciona qué deseas canjear con tus puntos'
    },
    {
      numero: 4,
      titulo: 'Disfruta',
      descripcion: 'Usa tu beneficio en el comercio o recibe tu producto'
    }
  ];

  faqs = [
    {
      pregunta: '¿Cuál es el valor de un WinCoin?',
      respuesta: 'Un WinCoin equivale a $0.01 USD aproximadamente. El valor puede variar según el comercio.'
    },
    {
      pregunta: '¿Cuándo vencen mis WinCoins?',
      respuesta: 'Tus WinCoins son válidos por 24 meses desde la fecha de acumulación.'
    },
    {
      pregunta: '¿Puedo transferir mis WinCoins?',
      respuesta: 'Sí, puedes transferir tus WinCoins a otros usuarios de Winners de forma gratuita.'
    },
    {
      pregunta: '¿Hay algún costo para redimir?',
      respuesta: 'No, redimir tus WinCoins es completamente gratis. Sin comisiones.'
    }
  ];
}
