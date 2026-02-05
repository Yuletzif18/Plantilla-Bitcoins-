import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Comercio {
  nombre: string;
  imagen: string;
  descripcion?: string;
}

export interface Seccion {
  titulo: string;
  encabezado: string;
  imagen: string;
  icono: string;
  botonTexto: string;
  botonUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  /**
   * Obtiene la lista de comercios afiliados
   * @returns Observable con array de comercios
   */
  getComercios(): Observable<Comercio[]> {
    return of([
      { 
        nombre: 'Estilo\'s Salón', 
        imagen: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop',
        descripcion: 'Salón de belleza y estética'
      },
      { 
        nombre: 'Farma Value', 
        imagen: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=300&fit=crop',
        descripcion: 'Farmacia y productos de salud'
      },
      { 
        nombre: 'Donkey Mexican Fusion', 
        imagen: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=300&fit=crop',
        descripcion: 'Restaurante de comida mexicana'
      },
      { 
        nombre: 'La Tecleña', 
        imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
        descripcion: 'Panadería y pastelería'
      },
      { 
        nombre: 'Almacenes Simán', 
        imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        descripcion: 'Tienda departamental'
      },
      { 
        nombre: 'Super Selectos', 
        imagen: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=300&fit=crop',
        descripcion: 'Supermercado'
      },
      { 
        nombre: 'Ferreterías Freund', 
        imagen: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=300&fit=crop',
        descripcion: 'Ferretería y materiales de construcción'
      },
      { 
        nombre: 'Tienda digital Winners', 
        imagen: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300&h=300&fit=crop',
        descripcion: 'Tienda en línea'
      }
    ]);
  }

  /**
   * Obtiene las secciones principales del sitio
   * @returns Observable con array de secciones
   */
  getSecciones(): Observable<Seccion[]> {
    return of([
      {
        titulo: 'Regístrate',
        encabezado: 'Sólo necesitas tener tu DUI a la mano y unos minutos para ser parte de Winners.',
        imagen: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        icono: 'fa-solid fa-mobile-screen-button',
        botonTexto: 'Regístrate ahora',
        botonUrl: 'https://registro.winners.sv'
      },
      {
        titulo: 'Acumula',
        encabezado: 'Acumula puntos cuando pagues con dinero tus compras del día a día.',
        imagen: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
        icono: 'fa-solid fa-store',
        botonTexto: 'Conoce más',
        botonUrl: '/personas/acumula'
      },
      {
        titulo: 'Redime',
        encabezado: 'Redime tus wincoins en cualquiera de nuestros comercios aliados.',
        imagen: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop',
        icono: 'fa-solid fa-coins',
        botonTexto: 'Conoce más',
        botonUrl: '/personas/redime'
      }
    ]);
  }
}
