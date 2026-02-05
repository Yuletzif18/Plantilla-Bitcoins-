import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-success-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-cases.html',
  styleUrls: ['./success-cases.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
export class SuccessCasesComponent {
  title = 'Casos de Éxito';
  subtitle = 'Historias reales de comercios que han crecido con Winners';

  /**
   * Genera un SVG dinámico para la imagen de cada caso de éxito
   * @param categoria - Nombre de la categoría del negocio
   * @param emoji - Emoji representativo del tipo de negocio
   * @param color - Color primario del gradiente
   * @returns String con el SVG completo
   */
  generarSvgCaso(categoria: string, emoji: string, color: string): string {
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; object-fit:cover;">
      <defs>
        <linearGradient id="grad${categoria}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad${categoria})"/>
      <circle cx="100" cy="80" r="60" fill="#fff" opacity="0.2"/>
      <circle cx="350" cy="250" r="80" fill="#fff" opacity="0.15"/>
      <g transform="translate(140, 80)">
        <circle cx="60" cy="60" r="55" fill="#fff"/>
        <text x="60" y="80" text-anchor="middle" font-size="70">${emoji}</text>
      </g>
      <text x="200" y="210" text-anchor="middle" font-size="18" font-weight="bold" fill="#fff">${categoria}</text>
      <text x="200" y="240" text-anchor="middle" font-size="14" fill="#fff" opacity="0.9">Caso de Éxito Winners</text>
    </svg>`;
  }

  casos = [
    {
      titulo: 'Estilo\'s Salón - Aumento 45% en Ventas',
      descripcion: 'Un salón de belleza pequeño pasó de 15 clientes diarios a 25 gracias al programa Winners. Los clientes acumulan puntos en cada corte o tratamiento.',
      imagen: '',
      emoji: '💇',
      categoria: 'Belleza',
      color: '#ff006e',
      resultado: '+45% ventas',
      tiempo: '6 meses'
    },
    {
      titulo: 'Farma Value - Fidelización de Clientes',
      descripcion: 'Una farmacia local aumentó su clientela recurrente en 60%. Ahora los clientes vuelven semanalmente para acumular puntos.',
      imagen: '',
      emoji: '💊',
      categoria: 'Farmacia',
      color: '#0066ff',
      resultado: '+60% clientes',
      tiempo: '4 meses'
    },
    {
      titulo: 'Donkey Mexican Fusion - Tickets Promedio +35%',
      descripcion: 'Un restaurante de comida mexicana incrementó significativamente su ticket promedio ofreciendo combo especiales para redimidores de puntos.',
      imagen: '',
      emoji: '🌮',
      categoria: 'Restaurante',
      color: '#ff9500',
      resultado: '+35% ticket',
      tiempo: '3 meses'
    },
    {
      titulo: 'La Tecleña - Aumento de Horas Pico',
      descripcion: 'Una panadería redistribuyó su clientela a través de ofertas especiales para usuarios de Winners durante horas bajas.',
      imagen: '',
      emoji: '🥖',
      categoria: 'Alimentos',
      color: '#d4a574',
      resultado: '+40% ocupación',
      tiempo: '5 meses'
    },
    {
      titulo: 'Almacenes Simán - Venta Cruzada Efectiva',
      descripcion: 'Incrementó compras de productos complementarios promocionando ofertas exclusivas para miembros del programa Winners.',
      imagen: '',
      emoji: '🛍️',
      categoria: 'Retail',
      color: '#ff006e',
      resultado: '+50% venta cruzada',
      tiempo: '7 meses'
    },
    {
      titulo: 'Super Selectos - Lealtad Confirmada',
      descripcion: 'Un supermercado confirmó que 70% de sus usuarios de Winners compran al menos 2 veces por semana versus 20% de clientes no-Winners.',
      imagen: '',
      emoji: '🛒',
      categoria: 'Supermercado',
      color: '#00aa44',
      resultado: '+70% lealtad',
      tiempo: '8 meses'
    }
  ];

  estadisticas = [
    {
      numero: '500+',
      label: 'Comercios Aliados',
      icono: 'fa-solid fa-store'
    },
    {
      numero: '50.000+',
      label: 'Usuarios Activos',
      icono: 'fa-solid fa-users'
    },
    {
      numero: '$2.5M',
      label: 'En Transacciones',
      icono: 'fa-solid fa-credit-card'
    },
    {
      numero: '45%',
      label: 'Aumento Promedio',
      icono: 'fa-solid fa-chart-line'
    }
  ];

  testimonios = [
    {
      nombre: 'Roberto García',
      cargo: 'Dueño de Estilo\'s Salón',
      testimonial: 'Winners cambió completamente mi negocio. Ahora tengo clientes fieles que vuelven regularmente. La plataforma es fácil de usar y el soporte es excelente.',
      stars: 5
    },
    {
      nombre: 'Claudia Morales',
      cargo: 'Gerente Farma Value',
      testimonial: 'La integración fue rápida y sin complicaciones. Mis vendedores se adaptaron en días. Los resultados han superado nuestras expectativas.',
      stars: 5
    },
    {
      nombre: 'David López',
      cargo: 'Administrador Donkey Mexican Fusion',
      testimonial: 'Increíble herramienta para fidelizar clientes. Recomiendo 100% a cualquier comercio que quiera crecer de manera sostenible.',
      stars: 5
    }
  ];
}
