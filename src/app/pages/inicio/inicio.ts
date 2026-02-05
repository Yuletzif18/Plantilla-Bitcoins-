import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataService, Comercio, Seccion } from '../../services/data';
import { VideoService } from '../../services/video.service';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carruselContainer', { static: false }) carruselContainer?: ElementRef;
  
  comercios: Comercio[] = [];
  secciones: Seccion[] = [];
  private destroy$ = new Subject<void>();
  private isBrowser: boolean;
  
  // Variables para el carrusel de logos
  private scrollLeft = 0;
  private scrollSpeed = 1.5;
  private animationFrameId?: number;

  // Carrusel de imágenes del Hero
  heroSlides = [
    {
      imagen: 'https://prepanel.lncproducciones.com/upl/20250130212725_portada-2-modelo2.jpg',
      titulo: 'Hacé tu vida más fácil',
      descripcion: 'acumulando y redimiendo tus WinCoins',
      botonTexto: 'Descargá la App',
      botonUrl: 'https://concd.me/getwinners'
    },
    {
      imagen: 'https://prepanel.lncproducciones.com/upl/20250130212852_portada-2-modelo1.jpg',
      titulo: 'Acumulá... Redimí... Disfrutá!',
      descripcion: '',
      botonTexto: 'Descargá la App',
      botonUrl: 'https://concd.me/getwinners'
    }
  ];

  currentSlideIndex = 0;

  constructor(
    private dataService: DataService,
    private videoService: VideoService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.cargarDatos();
    this.iniciarCarruselHero();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Iniciar animación del carrusel de logos después de que la vista esté lista
      setTimeout(() => this.iniciarCarruselLogos(), 100);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    
    // Cancelar animación del carrusel
    if (this.animationFrameId && this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private cargarDatos() {
    this.dataService.getComercios()
      .pipe(takeUntil(this.destroy$))
      .subscribe(comercios => {
        this.comercios = comercios;
      });

    this.dataService.getSecciones()
      .pipe(takeUntil(this.destroy$))
      .subscribe(secciones => {
        this.secciones = secciones;
      });
  }

  private iniciarCarruselHero() {
    if (this.isBrowser) {
      interval(5000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.nextSlide());
    }
  }

  private iniciarCarruselLogos() {
    if (!this.carruselContainer || !this.isBrowser) return;

    const animate = () => {
      if (!this.carruselContainer) return;
      
      this.scrollLeft += this.scrollSpeed;
      const element = this.carruselContainer.nativeElement;
      const maxScroll = element.scrollWidth / 2;
      
      if (this.scrollLeft >= maxScroll) {
        this.scrollLeft = 0;
      }
      
      element.style.transform = `translateX(-${this.scrollLeft}px)`;
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  getCurrentSlide() {
    return this.heroSlides[this.currentSlideIndex];
  }

  // Método para duplicar comercios para el efecto de loop infinito
  get comerciosDuplicados(): Comercio[] {
    return [...this.comercios, ...this.comercios];
  }

  // Método para abrir video de YouTube
  openVideo(event: Event, videoId: string = 'M4EzZnDoMhw') {
    event.preventDefault();
    this.videoService.openYouTubeVideo(videoId);
  }
}
