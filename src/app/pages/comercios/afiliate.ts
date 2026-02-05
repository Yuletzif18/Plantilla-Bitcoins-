import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-afiliate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afiliate.html',
  styleUrls: ['./afiliate.css'],
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
export class AfiliateComponent {
  title = 'Conviértete en Comercio Aliado';
  subtitle = 'Aumenta tus ventas y fideliza a tus clientes con el programa Winners';

  // SVG Hero Illustration
  getSvgHero() {
    return `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
      <defs>
        <linearGradient id="gradHero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6a0bad;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="500" height="400" fill="#f0f4ff"/>
      <circle cx="150" cy="100" r="70" fill="#6a0bad" opacity="0.1"/>
      <circle cx="400" cy="300" r="90" fill="#00d4ff" opacity="0.1"/>
      <rect x="100" y="150" width="300" height="200" rx="20" fill="#fff" stroke="url(#gradHero)" stroke-width="3"/>
      <g transform="translate(150, 180)">
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="60" height="80" rx="8" fill="url(#gradHero)"/>
          <circle cx="30" cy="25" r="12" fill="#fff"/>
          <rect x="10" y="45" width="40" height="5" fill="#fff" opacity="0.7"/>
          <rect x="10" y="55" width="40" height="5" fill="#fff" opacity="0.7"/>
        </g>
        <g transform="translate(100, 0)">
          <rect x="0" y="0" width="60" height="80" rx="8" fill="#00d4ff"/>
          <circle cx="30" cy="25" r="12" fill="#fff"/>
          <rect x="10" y="45" width="40" height="5" fill="#fff" opacity="0.7"/>
          <rect x="10" y="55" width="40" height="5" fill="#fff" opacity="0.7"/>
        </g>
      </g>
      <text x="250" y="130" text-anchor="middle" font-size="18" font-weight="bold" fill="#6a0bad">Conecta con tus clientes</text>
    </svg>`;
  }

  getSvgRequisitos() {
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
      <defs>
        <linearGradient id="gradReq" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6a0bad;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#f8f9fa"/>
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="80" height="80" rx="10" fill="#f0f0f0"/>
        <circle cx="40" cy="40" r="35" fill="url(#gradReq)"/>
        <text x="40" y="48" text-anchor="middle" font-size="40" fill="#fff" font-weight="bold">📋</text>
      </g>
      <g transform="translate(160, 50)">
        <rect x="0" y="0" width="80" height="80" rx="10" fill="#f0f0f0"/>
        <circle cx="40" cy="40" r="35" fill="#6a0bad"/>
        <text x="40" y="48" text-anchor="middle" font-size="40" fill="#fff" font-weight="bold">✓</text>
      </g>
      <g transform="translate(270, 50)">
        <rect x="0" y="0" width="80" height="80" rx="10" fill="#f0f0f0"/>
        <circle cx="40" cy="40" r="35" fill="#00d4ff"/>
        <text x="40" y="48" text-anchor="middle" font-size="40" fill="#fff" font-weight="bold">🎯</text>
      </g>
      <text x="200" y="180" text-anchor="middle" font-size="16" fill="#333" font-weight="bold">Requisitos: Empresa Legal + PDV + Documentación</text>
      <text x="200" y="210" text-anchor="middle" font-size="14" fill="#666">Proceso simple y rápido en 5-7 días</text>
    </svg>`;
  }
  
  pasos = [
    {
      numero: 1,
      titulo: 'Registra tu Negocio',
      descripcion: 'Completa nuestro formulario con información de tu comercio',
      icono: 'fa-solid fa-clipboard-list',
      tiempo: '5 minutos'
    },
    {
      numero: 2,
      titulo: 'Validación',
      descripcion: 'Nuestro equipo revisa tu información en 24-48 horas',
      icono: 'fa-solid fa-check-double',
      tiempo: '24-48 hrs'
    },
    {
      numero: 3,
      titulo: 'Instalación',
      descripcion: 'Instalamos tu terminal PDV o sistema en tu local',
      icono: 'fa-solid fa-server',
      tiempo: '1-2 días'
    },
    {
      numero: 4,
      titulo: 'Activación',
      descripcion: 'Aparece en la app y comienza a recibir clientes Winners',
      icono: 'fa-solid fa-rocket',
      tiempo: 'Inmediato'
    }
  ];

  beneficios = [
    {
      titulo: 'Visibilidad en Línea',
      descripcion: 'Los usuarios te encontrarán en el directorio de comercios aliados por categoría y ubicación',
      icono: 'fa-solid fa-eye',
      color: '#6a0dad'
    },
    {
      titulo: 'Clientes con Intención',
      descripcion: 'Usuarios con WinCoins listos para gastar en tu negocio',
      icono: 'fa-solid fa-wallet',
      color: '#00d4ff'
    },
    {
      titulo: 'Lealtad de Clientes',
      descripcion: 'Compradores que regresan regularmente para redimir puntos',
      icono: 'fa-solid fa-heart',
      color: '#ff006e'
    },
    {
      titulo: 'Análisis en Tiempo Real',
      descripcion: 'Dashboard con reportes de transacciones y clientes',
      icono: 'fa-solid fa-chart-line',
      color: '#00ff41'
    }
  ];

  requisitos = [
    {
      titulo: 'Empresa Registrada',
      descripcion: 'Ser un comercio legal registrado en El Salvador',
      icono: 'fa-solid fa-building'
    },
    {
      titulo: 'Punto de Venta Fijo',
      descripcion: 'Disponer de una ubicación física con capacidad para PDV',
      icono: 'fa-solid fa-map-location-dot'
    },
    {
      titulo: 'Volumen Mínimo',
      descripcion: 'Mínimo 10 transacciones mensuales estimadas',
      icono: 'fa-solid fa-handshake'
    },
    {
      titulo: 'Documentación',
      descripcion: 'DUI, NIT, RUC y últimos 3 meses de estados financieros',
      icono: 'fa-solid fa-file-shield'
    }
  ];

  metodoPago = [
    { 
      titulo: 'Solo WinCoins', 
      descripcion: 'El cliente paga completamente con sus puntos',
      precio: '100%'
    },
    { 
      titulo: 'Combo (WinCoins + Dinero)', 
      descripcion: 'Combinación de puntos y pago en efectivo/tarjeta',
      precio: 'Variable'
    },
    { 
      titulo: 'Solo Dinero', 
      descripcion: 'Cliente paga en efectivo y continúa acumulando puntos',
      precio: '0% puntos'
    }
  ];

  preguntas = [
    {
      pregunta: '¿Cuál es el costo de afiliación?',
      respuesta: 'La afiliación es completamente GRATIS. Solo pagas una comisión del 3% en cada transacción realizada con WinCoins.'
    },
    {
      pregunta: '¿Cuánto tiempo tarda el proceso?',
      respuesta: 'El proceso completo de registro a activación toma 5-7 días hábiles en promedio.'
    },
    {
      pregunta: '¿Necesito equipo especial?',
      respuesta: 'No necesariamente. Podemos integrar con tu PDV existente o proporcionarte una terminal móvil.'
    },
    {
      pregunta: '¿Cuál es la comisión que paga Winners?',
      respuesta: 'Winners retiene el 3% de cada transacción pagada con WinCoins. El 97% va directamente a tu beneficio.'
    }
  ];
}

