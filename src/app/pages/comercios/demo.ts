import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css']
})
export class DemoComponent {
  title = 'Demo Interactiva';

  caracteristicas = [
    {
      titulo: 'Terminal de Punto de Venta',
      descripcion: 'Interfaz intuitiva para procesar pagos con WinCoins y dinero en efectivo',
      icono: 'fa-solid fa-cash-register'
    },
    {
      titulo: 'Panel de Control',
      descripcion: 'Visualiza tus ventas, transacciones de WinCoins y estadísticas de clientes',
      icono: 'fa-solid fa-chart-line'
    },
    {
      titulo: 'Gestión de Clientes',
      descripcion: 'Acceso a información de tus clientes y su historial de compras',
      icono: 'fa-solid fa-users'
    },
    {
      titulo: 'Reportes Detallados',
      descripcion: 'Reportes de ventas, comisiones y análisis de tendencias',
      icono: 'fa-solid fa-file-pdf'
    }
  ];
}
