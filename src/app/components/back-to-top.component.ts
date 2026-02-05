import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

/**
 * Componente para mostrar botón "Volver arriba" cuando el usuario hace scroll.
 * Se muestra automáticamente después de scrollear cierta distancia.
 * 
 * Uso en el template:
 * <app-back-to-top></app-back-to-top>
 */
@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a *ngIf="isVisible" 
       (click)="scrollToTop()" 
       class="btn btn-icon btn-primary back-to-top"
       [class.show]="isVisible">
      <i class="mdi mdi-arrow-up"></i>
    </a>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }

    .back-to-top.show {
      opacity: 1;
      visibility: visible;
    }

    .back-to-top:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .back-to-top i {
      font-size: 20px;
      color: white;
    }
  `]
})
export class BackToTopComponent implements OnInit, OnDestroy {
  isVisible = false;
  private scrollHandler?: () => void;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.scrollHandler = () => {
      this.isVisible = window.pageYOffset > 300;
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy() {
    if (this.scrollHandler && this.isBrowser) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  scrollToTop() {
    if (!this.isBrowser) return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
