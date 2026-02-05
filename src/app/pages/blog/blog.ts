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

  private cargarPosts() {
    this.posts = [
      {
        id: '1',
        titulo: 'Cómo maximizar tus WinCoins',
        fecha: '15 de Enero 2026',
        extracto: 'Descubre las mejores estrategias para acumular más WinCoins en cada compra y obtener los máximos beneficios.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+1',
        categoria: 'Consejos',
        autor: 'WINNERS'
      },
      {
        id: '2',
        titulo: 'Nuevos comercios afiliados',
        fecha: '10 de Enero 2026',
        extracto: 'Conoce los nuevos comercios donde puedes acumular y redimir tus WinCoins con descuentos especiales.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+2',
        categoria: 'Noticias',
        autor: 'WINNERS'
      },
      {
        id: '3',
        titulo: 'Beneficios exclusivos de Winners',
        fecha: '5 de Enero 2026',
        extracto: 'Explora todos los beneficios y ventajas especiales de ser parte de la comunidad Winners.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+3',
        categoria: 'Beneficios',
        autor: 'WINNERS'
      },
      {
        id: '4',
        titulo: 'Guía de afiliación para comercios',
        fecha: '28 de Diciembre 2025',
        extracto: 'Paso a paso para afiliarte como comercio y comenzar a ofrecer recompensas a tus clientes.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+4',
        categoria: 'Consejos',
        autor: 'WINNERS'
      },
      {
        id: '5',
        titulo: 'Seguridad en transacciones',
        fecha: '20 de Diciembre 2025',
        extracto: 'Conoce cómo protegemos tus datos personales y financieros en la plataforma Winners.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+5',
        categoria: 'Beneficios',
        autor: 'WINNERS'
      },
      {
        id: '6',
        titulo: 'Actualizaciones de la app',
        fecha: '15 de Diciembre 2025',
        extracto: 'Descubre las nuevas características y mejoras en la última versión de la aplicación Winners.',
        contenido: 'Contenido completo del post...',
        imagen: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Blog+Post+6',
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
