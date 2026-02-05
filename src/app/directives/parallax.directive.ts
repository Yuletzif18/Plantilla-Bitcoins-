import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Directiva para crear efectos parallax en elementos.
 * Uso: <div appParallax [parallaxSpeed]="0.5">...</div>
 * 
 * El valor de parallaxSpeed determina la velocidad del efecto:
 * - 0 = sin movimiento
 * - 0.5 = mitad de la velocidad del scroll (por defecto)
 * - 1 = velocidad normal del scroll
 * - >1 = más rápido que el scroll
 */
@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxSpeed: number = 0.5;
  
  private scrollHandler?: () => void;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.scrollHandler = () => {
      const scrolled = window.pageYOffset;
      const rect = this.el.nativeElement.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = this.el.nativeElement.offsetHeight;
      
      // Solo aplicar parallax si el elemento está en el viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * this.parallaxSpeed;
        this.el.nativeElement.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    
    // Ejecutar una vez al inicio
    this.scrollHandler();
  }

  ngOnDestroy() {
    if (this.scrollHandler && this.isBrowser) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
