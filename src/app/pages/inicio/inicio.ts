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
  
  /** Variables para el carrusel de logos de comercios */
  private scrollLeft = 0;
  private scrollSpeed = 1.5;
  private animationFrameId?: number;

  /** Hero carousel configuration */
  heroSlides = [
    {
      imagen: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&h=800&fit=crop',
      titulo: 'Hacé tu vida más fácil',
      descripcion: 'acumulando y redimiendo tus WinCoins',
      botonTexto: 'Descargá la App',
      botonUrl: 'https://concd.me/getwinners'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=800&fit=crop',
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
      setTimeout(() => this.iniciarCarruselLogos(), 100);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.animationFrameId && this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  /**
   * Carga los datos de comercios y secciones desde el servicio
   */
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

  /**
   * Inicia el carrusel automático del hero
   * Cambia de slide cada 5 segundos
   */
  private iniciarCarruselHero() {
    if (this.isBrowser) {
      interval(5000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.nextSlide());
    }
  }

  /**
   * Inicia la animación continua del carrusel de logos
   * Usa requestAnimationFrame para una animación suave
   */
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

  /**
   * Avanza al siguiente slide del hero
   */
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  /**
   * Retrocede al slide anterior del hero
   */
  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  /**
   * Obtiene el slide actual del hero
   */
  getCurrentSlide() {
    return this.heroSlides[this.currentSlideIndex];
  }

  /**
   * Duplica el array de comercios para crear el efecto de loop infinito
   */
  get comerciosDuplicados(): Comercio[] {
    return [...this.comercios, ...this.comercios];
  }

  /**
   * Abre el video de YouTube en un modal
   * @param event - Evento del click
   * @param videoId - ID del video de YouTube
   */
  openVideo(event: Event, videoId: string = 'M4EzZnDoMhw') {
    event.preventDefault();
    this.videoService.openYouTubeVideo(videoId);
  }
}
