import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  openYouTubeVideo(videoId: string) {
    if (!this.isBrowser) return;

    // Crear modal para el video
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-overlay" onclick="this.parentElement.remove()">
        <div class="video-modal-content" onclick="event.stopPropagation()">
          <button class="video-modal-close" onclick="this.closest('.video-modal').remove()">
            <i class="mdi mdi-close"></i>
          </button>
          <div class="video-responsive">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    `;

    // Agregar estilos inline
    const style = document.createElement('style');
    style.textContent = `
      .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
      }
      .video-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .video-modal-content {
        position: relative;
        width: 100%;
        max-width: 900px;
        background: #000;
        border-radius: 8px;
        overflow: hidden;
      }
      .video-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: transparent;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        z-index: 10000;
        padding: 5px 10px;
      }
      .video-responsive {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
      }
      .video-responsive iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    // Restaurar scroll cuando se cierre
    modal.addEventListener('click', (e) => {
      if (e.target === modal || (e.target as HTMLElement).classList.contains('video-modal-overlay')) {
        document.body.style.overflow = '';
      }
    });
  }

  openVideoUrl(url: string) {
    if (!this.isBrowser) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
