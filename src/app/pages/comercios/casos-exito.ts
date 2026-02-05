import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos-exito.html',
  styleUrls: ['./casos-exito.css']
})
export class CasosExitoComponent {
  title = 'Casos de Éxito';

  generarSvgCaso(categoria: string, emoji: string, color: string): string {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;object-fit:cover;">
      <defs>
        <linearGradient id="grad${categoria}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill="url(#grad${categoria})"/>
      <circle cx="60" cy="50" r="35" fill="#fff" opacity="0.2"/>
      <circle cx="280" cy="180" r="55" fill="#fff" opacity="0.15"/>
      <circle cx="150" cy="80" r="45" fill="#fff"/>
      <text x="150" y="105" text-anchor="middle" font-size="50">${emoji}</text>
      <rect x="20" y="140" width="260" height="45" rx="6" fill="#fff" opacity="0.15"/>
      <text x="150" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">${categoria}</text>
    </svg>`;
  }

  casos = [
    {
      negocio: 'Salón de Belleza "Estilo\'s"',
      categoria: 'Belleza',
      emoji: '💇',
      color: '#ff006e',
      resultado: '+40% en ventas',
      testimonio: 'Winners nos ayudó a fidelizar clientes. Muchos regresan especialmente para redimir sus WinCoins.'
    },
    {
      negocio: 'Restaurante "Donkey Mexican Fusion"',
      categoria: 'Alimentos',
      emoji: '🍽️',
      color: '#ff9500',
      resultado: '+65% en clientes nuevos',
      testimonio: 'La visibilidad en la app de Winners atrajo muchos clientes nuevos interesados en usar sus puntos.'
    },
    {
      negocio: 'Panadería "La Tecleña"',
      categoria: 'Panadería',
      emoji: '🥖',
      color: '#d4a574',
      resultado: '+35% en ticket promedio',
      testimonio: 'Los clientes que redimen WinCoins tienden a comprar más. Es una excelente estrategia de venta cruzada.'
    },
    {
      negocio: 'Farmacia "Farma Value"',
      categoria: 'Farmacia',
      emoji: '💊',
      color: '#0066ff',
      resultado: '+50% en repetición',
      testimonio: 'Winners nos permitió crear un programa de lealtad efectivo sin inversión inicial.'
    }
  ];
}
