import { Directive, HostListener, Input, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Directiva para scroll suave a elementos con ID.
 * Uso: <a appSmoothScroll [target]="'#seccion'">Ir a Sección</a>
 */
@Directive({
  selector: '[appSmoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  @Input() target: string = '';
  @Input() offset: number = 70; // Offset para header fijo
  
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!this.isBrowser || !this.target) return;

    event.preventDefault();
    
    const targetId = this.target.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - this.offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
