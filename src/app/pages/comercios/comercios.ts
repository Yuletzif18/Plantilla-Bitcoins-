import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-comercios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comercios.html',
  styleUrls: ['./comercios.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ComerciosComponent {
  title = 'WINNERS para Comercios';
  
  beneficios = [
    {
      titulo: 'Aumenta tus ventas',
      descripcion: 'Atrae más clientes y aumenta la frecuencia de compra con nuestro sistema de recompensas',
      icono: 'fa-solid fa-chart-line'
    },
    {
      titulo: 'Fideliza clientes',
      descripcion: 'Crea una base de clientes leales que regresan por más beneficios',
      icono: 'fa-solid fa-users'
    },
    {
      titulo: 'Tecnología simple',
      descripcion: 'Sistema fácil de usar que se integra perfectamente con tu operación actual',
      icono: 'fa-solid fa-mobile-screen-button'
    },
    {
      titulo: 'Análisis y reportes',
      descripcion: 'Obtén información valiosa sobre el comportamiento de tus clientes',
      icono: 'fa-solid fa-chart-pie'
    },
    {
      titulo: 'Red nacional',
      descripcion: 'Sé parte de una red de comercios de confianza en todo el país',
      icono: 'fa-solid fa-globe'
    },
    {
      titulo: 'Soporte dedicado',
      descripcion: 'Nuestro equipo está disponible para apoyarte en todo momento',
      icono: 'fa-solid fa-headset'
    }
  ];

  pasos = [
    {
      numero: 1,
      titulo: 'Regístrate',
      descripcion: 'Completa el formulario de registro con información de tu negocio'
    },
    {
      numero: 2,
      titulo: 'Configura',
      descripcion: 'Establecemos tu terminal y configuramos el sistema en tu local'
    },
    {
      numero: 3,
      titulo: 'Vende',
      descripcion: 'Comienza a ofrecer recompensas a tus clientes inmediatamente'
    }
  ];
}
