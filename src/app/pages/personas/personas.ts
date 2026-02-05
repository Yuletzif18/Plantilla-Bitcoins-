import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personas.html',
  styleUrls: ['./personas.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PersonasComponent {
  title = 'WINNERS para Personas';
  
  pasos = [
    {
      numero: 1,
      titulo: 'Regístrate',
      descripcion: 'Descarga la app y crea tu cuenta en pocos minutos',
      icono: 'fa-solid fa-user-plus'
    },
    {
      numero: 2,
      titulo: 'Compra',
      descripcion: 'Realiza tus compras en comercios afiliados',
      icono: 'fa-solid fa-shopping-cart'
    },
    {
      numero: 3,
      titulo: 'Disfruta',
      descripcion: 'Redime tus wincoins y obtén beneficios increíbles',
      icono: 'fa-solid fa-gift'
    }
  ];

  beneficios = [
    {
      titulo: 'Acumula WinCoins',
      descripcion: 'Gana puntos con cada compra que realizas en comercios aliados',
      icono: 'fa-solid fa-coins'
    },
    {
      titulo: 'Redime Beneficios',
      descripcion: 'Canjea tus puntos por descuentos, productos o servicios',
      icono: 'fa-solid fa-award'
    },
    {
      titulo: 'Referidos',
      descripcion: 'Invita a tus amigos y ambos ganan bonificación',
      icono: 'fa-solid fa-people-arrows'
    }
  ];
}
