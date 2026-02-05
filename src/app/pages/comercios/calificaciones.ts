import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calificaciones.html',
  styleUrls: ['./calificaciones.css']
})
export class CalificacionesComponent {
  title = 'Calificaciones de Comercios';

  getSvgAvatar(emoji: string, color: string): string {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100px;height:100px;">
      <defs>
        <linearGradient id="grad${color}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#grad${color})"/>
      <text x="50" y="65" text-anchor="middle" font-size="50">${emoji}</text>
    </svg>`;
  }

  comercios = [
    {
      nombre: 'Salón de Belleza "Estilo\'s"',
      categoria: 'Belleza',
      calificacion: 4.8,
      resenas: 156,
      emoji: '💇',
      color: '#ff006e'
    },
    {
      nombre: 'Restaurante "Donkey Mexican Fusion"',
      categoria: 'Alimentos',
      calificacion: 4.9,
      resenas: 203,
      emoji: '🍽️',
      color: '#ff9500'
    },
    {
      nombre: 'Panadería "La Tecleña"',
      categoria: 'Panadería',
      calificacion: 4.7,
      resenas: 98,
      emoji: '🥖',
      color: '#d4a574'
    },
    {
      nombre: 'Farmacia "Farma Value"',
      categoria: 'Farmacia',
      calificacion: 4.6,
      resenas: 142,
      emoji: '💊',
      color: '#0066ff'
    },
    {
      nombre: 'Tienda "Almacenes Simán"',
      categoria: 'Tienda',
      calificacion: 4.9,
      resenas: 287,
      emoji: '🛍️',
      color: '#ff006e'
    },
    {
      nombre: 'Supermercado "Super Selectos"',
      categoria: 'Supermercado',
      calificacion: 4.8,
      resenas: 421,
      emoji: '🛒',
      color: '#00aa44'
    }
  ];

  filtroCategorias = ['Todos', 'Belleza', 'Alimentos', 'Farmacia', 'Tienda', 'Supermercado'];
  categoriaSeleccionada = 'Todos';

  get comerciosFiltrados() {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.comercios;
    }
    return this.comercios.filter(c => c.categoria === this.categoriaSeleccionada);
  }

  filtrar(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  getEstrellasArray(calificacion: number) {
    return Array(Math.round(calificacion));
  }
}
