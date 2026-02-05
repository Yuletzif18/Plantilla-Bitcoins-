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
  
  getComercios(): Observable<Comercio[]> {
    return of([
      { 
        nombre: 'Estilo\'s Salón', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130232700_mainScreen_icon_Estilos.png',
        descripcion: 'Salón de belleza y estética'
      },
      { 
        nombre: 'Farma Value', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130232527_mainScreen_icon_farmaValue.png',
        descripcion: 'Farmacia y productos de salud'
      },
      { 
        nombre: 'Donkey Mexican Fusion', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130232507_mainScreen_icon_donkey.png',
        descripcion: 'Restaurante de comida mexicana'
      },
      { 
        nombre: 'La Tecleña', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130232102_mainScreen_icon_teclena.png',
        descripcion: 'Panadería y pastelería'
      },
      { 
        nombre: 'Almacenes Simán', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130231856_mainScreen_icon_siman.png',
        descripcion: 'Tienda departamental'
      },
      { 
        nombre: 'Super Selectos', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130231836_mainScreen_icon_selectos.png',
        descripcion: 'Supermercado'
      },
      { 
        nombre: 'Ferreterías Freund', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130231816_mainScreen_icon_freund.png',
        descripcion: 'Ferretería y materiales de construcción'
      },
      { 
        nombre: 'Tienda digital Winners', 
        imagen: 'https://prepanel.lncproducciones.com/upl/20250130231754_logo_wincoins.png',
        descripcion: 'Tienda en línea'
      }
    ]);
  }

  getSecciones(): Observable<Seccion[]> {
    return of([
      {
        titulo: 'Regístrate',
        encabezado: 'Sólo necesitas tener tu DUI a la mano y unos minutos para ser parte de Winners.',
        imagen: 'https://prepanel.lncproducciones.com/upl/20250131000744_chrome_8LqJj198Ya.png',
        icono: 'fa-solid fa-mobile-screen-button',
        botonTexto: 'Regístrate ahora',
        botonUrl: 'https://registro.winners.sv'
      },
      {
        titulo: 'Acumula',
        encabezado: 'Acumula puntos cuando pagues con dinero tus compras del día a día.',
        imagen: 'https://prepanel.lncproducciones.com/upl/20250131001018_chrome_11H8o9wEnv.png',
        icono: 'fa-solid fa-store',
        botonTexto: 'Conoce más',
        botonUrl: '/personas/acumula'
      },
      {
        titulo: 'Redime',
        encabezado: 'Redime tus wincoins en cualquiera de nuestros comercios aliados.',
        imagen: 'https://prepanel.lncproducciones.com/upl/20250131001222_chrome_PG0U8CsNGA.png',
        icono: 'fa-solid fa-coins',
        botonTexto: 'Conoce más',
        botonUrl: '/personas/redime'
      }
    ]);
  }
}
