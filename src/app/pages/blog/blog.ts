import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BlogPost {
  id: string;
  titulo: string;
  fecha: string;
  extracto: string;
  contenido: string;
  imagen: string;
  categoria: string;
  autor: string;
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  categorias = ['Todos', 'Consejos', 'Noticias', 'Beneficios'];
  categoriaSeleccionada = 'Todos';

  ngOnInit() {
    this.cargarPosts();
  }

  getSvgBlog(emoji: string, color: string, titulo: string): string {
    return `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;object-fit:cover;">
      <defs>
        <linearGradient id="grad${titulo.replace(/\s/g, '')}Blog" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#grad${titulo.replace(/\s/g, '')}Blog)"/>
      <circle cx="80" cy="60" r="45" fill="#fff" opacity="0.2"/>
      <circle cx="360" cy="210" r="65" fill="#fff" opacity="0.15"/>
      <circle cx="200" cy="95" r="50" fill="#fff"/>
      <text x="200" y="120" text-anchor="middle" font-size="50">${emoji}</text>
      <rect x="30" y="160" width="340" height="60" rx="8" fill="#fff" opacity="0.15"/>
      <text x="200" y="185" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">${titulo.substring(0, 35)}</text>
    </svg>`;
  }

  private cargarPosts() {
    this.posts = [
      {
        id: '1',
        titulo: 'Cómo maximizar tus WinCoins',
        fecha: '15 de Enero 2026',
        extracto: 'Descubre las mejores estrategias para acumular más WinCoins en cada compra y obtener los máximos beneficios.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '💰',
        color: '#ffc107',
        categoria: 'Consejos',
        autor: 'WINNERS'
      },
      {
        id: '2',
        titulo: 'Nuevos comercios afiliados',
        fecha: '10 de Enero 2026',
        extracto: 'Conoce los nuevos comercios donde puedes acumular y redimir tus WinCoins con descuentos especiales.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '🏪',
        color: '#ff006e',
        categoria: 'Noticias',
        autor: 'WINNERS'
      },
      {
        id: '3',
        titulo: 'Beneficios exclusivos de Winners',
        fecha: '5 de Enero 2026',
        extracto: 'Explora todos los beneficios y ventajas especiales de ser parte de la comunidad Winners.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '🎁',
        color: '#6a0bad',
        categoria: 'Beneficios',
        autor: 'WINNERS'
      },
      {
        id: '4',
        titulo: 'Guía de afiliación para comercios',
        fecha: '28 de Diciembre 2025',
        extracto: 'Paso a paso para afiliarte como comercio y comenzar a ofrecer recompensas a tus clientes.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '📋',
        color: '#00d4ff',
        categoria: 'Consejos',
        autor: 'WINNERS'
      },
      {
        id: '5',
        titulo: 'Seguridad en transacciones',
        fecha: '20 de Diciembre 2025',
        extracto: 'Conoce cómo protegemos tus datos personales y financieros en la plataforma Winners.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '🔒',
        color: '#00aa44',
        categoria: 'Beneficios',
        autor: 'WINNERS'
      },
      {
        id: '6',
        titulo: 'Actualizaciones de la app',
        fecha: '15 de Diciembre 2025',
        extracto: 'Descubre las nuevas características y mejoras en la última versión de la aplicación Winners.',
        contenido: 'Contenido completo del post...',
        imagen: '',
        emoji: '📱',
        color: '#ff9500',
        categoria: 'Noticias',
        autor: 'WINNERS'
      }
    ];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  get postsFiltratos() {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.posts;
    }
    return this.posts.filter(post => post.categoria === this.categoriaSeleccionada);
  }
}
