import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-referidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referidos.html',
  styleUrls: ['./referidos.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms 100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ReferidosComponent {
  title = 'Programa de Referidos';
  subtitle = 'Gana dinero invitando a tus amigos a usar Winners';

  // SVG Hero Illustration
  getSvgHero() {
    return `<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
      <defs>
        <linearGradient id="gradRef" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <g transform="translate(50, 50)">
        <circle cx="50" cy="50" r="45" fill="#fff" opacity="0.3"/>
        <circle cx="50" cy="50" r="40" fill="#fff"/>
        <circle cx="50" cy="50" r="35" fill="#6a0bad"/>
        <circle cx="50" cy="50" r="30" fill="#fff"/>
        <text x="50" y="60" text-anchor="middle" font-size="40" fill="#6a0bad" font-weight="bold">👤</text>
      </g>
      <g transform="translate(250, 80)">
        <circle cx="30" cy="30" r="25" fill="#fff" opacity="0.3"/>
        <circle cx="30" cy="30" r="22" fill="#fff"/>
        <text x="30" y="38" text-anchor="middle" font-size="28" fill="#00d4ff">+</text>
      </g>
      <g transform="translate(280, 180)">
        <circle cx="30" cy="30" r="25" fill="#fff" opacity="0.3"/>
        <circle cx="30" cy="30" r="22" fill="#fff"/>
        <text x="30" y="38" text-anchor="middle" font-size="24" fill="#6a0bad">👥</text>
      </g>
      <g transform="translate(150, 250)">
        <circle cx="40" cy="40" r="35" fill="#ffc107"/>
        <text x="40" y="52" text-anchor="middle" font-size="40" fill="#fff" font-weight="bold">💰</text>
      </g>
      <path d="M 100 100 L 280 220" stroke="#fff" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
      <path d="M 100 100 L 300 210" stroke="#fff" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
    </svg>`;
  }

  pasos = [
    {
      numero: 1,
      titulo: 'Obtén tu Código',
      descripcion: 'Cada usuario tiene un código único de referido en su perfil',
      icono: 'fa-solid fa-key'
    },
    {
      numero: 2,
      titulo: 'Comparte con Amigos',
      descripcion: 'Envíalo por WhatsApp, SMS, email o en persona',
      icono: 'fa-solid fa-share-nodes'
    },
    {
      numero: 3,
      titulo: 'Ellos Se Registran',
      descripcion: 'Tu amigo usa tu código al crear su cuenta en Winners',
      icono: 'fa-solid fa-user-plus'
    },
    {
      numero: 4,
      titulo: 'Ambos Ganan',
      descripcion: 'Reciben dinero en WinCoins automáticamente',
      icono: 'fa-solid fa-gift'
    }
  ];

  beneficios = [
    {
      titulo: 'Bono de Bienvenida',
      descripcion: 'Recibe $5 en WinCoins por cada amigo que se registre con tu código',
      icono: 'fa-solid fa-gift-open',
      monto: '$5 c/referido'
    },
    {
      titulo: 'Tu Amigo También Gana',
      descripcion: 'Tu referido obtiene $5 en WinCoins como bono de bienvenida',
      icono: 'fa-solid fa-handshake',
      monto: '$5 bonus'
    },
    {
      titulo: 'Sin Límites',
      descripcion: 'Invita a cuantos amigos quieras, no hay límite de ganancias',
      icono: 'fa-solid fa-infinity',
      monto: '∞ Ganancias'
    },
    {
      titulo: 'Compartir es Fácil',
      descripcion: 'Solo comparte tu código único por cualquier medio',
      icono: 'fa-solid fa-share',
      monto: '1 Click'
    }
  ];

  ejemplosCobro = [
    {
      nombre: 'Carlos refiere 10 amigos',
      objetivo: 'Gana su primer set de bonificación',
      calculo: '$5 × 10 referidos = $50',
      icono: 'fa-solid fa-user'
    },
    {
      nombre: 'María refiere 50 amigos',
      objetivo: 'Genera ingresos pasivos mensuales',
      calculo: '$5 × 50 referidos = $250',
      icono: 'fa-solid fa-users'
    },
    {
      nombre: 'Juan refiere 200 amigos',
      objetivo: 'Nuevo nivel de ingresos',
      calculo: '$5 × 200 referidos = $1,000',
      icono: 'fa-solid fa-award'
    }
  ];

  preguntas = [
    {
      pregunta: '¿Hay límite de amigos que puedo referir?',
      respuesta: 'No, puedes invitar a cuantos amigos quieras. No hay límites en el programa de referidos.'
    },
    {
      pregunta: '¿Cuándo recibo mis WinCoins?',
      respuesta: 'Los WinCoins se acreditan en tu cuenta dentro de 24 horas después de que tu referido se registre y verifique su identidad.'
    },
    {
      pregunta: '¿Mi amigo necesita hacer una compra?',
      respuesta: 'No, ambos reciben el bono de bienvenida solo por completar el registro con tu código.'
    },
    {
      pregunta: '¿Puedo compartir en redes sociales?',
      respuesta: 'Sí, puedes compartir tu código en todas las plataformas: Facebook, Instagram, Twitter, etc. Cuanto más lo compartas, más ganas.'
    },
    {
      pregunta: '¿Puedo retirar mis ganancias?',
      respuesta: 'Sí, puedes retirar tus WinCoins ganados como dinero en efectivo o usarlos para comprar en comercios aliados.'
    }
  ];
}

