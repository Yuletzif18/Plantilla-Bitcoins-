import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios.html',
  styleUrls: ['./beneficios.css']
})
export class BeneficiosComponent {
  title = 'Beneficios para Comercios';

  beneficios = [
    {
      titulo: 'Atrae Nuevos Clientes',
      descripcion: 'Los usuarios de Winners buscan activamente dónde gastar sus WinCoins. Tu negocio estará visible en la aplicación.',
      icono: 'fa-solid fa-people-arrows',
      color: 'primary'
    },
    {
      titulo: 'Aumenta las Ventas',
      descripcion: 'Estudios muestran que los programas de lealtad aumentan el ticket promedio de compra en un 25%.',
      icono: 'fa-solid fa-chart-line',
      color: 'success'
    },
    {
      titulo: 'Fideliza Clientes',
      descripcion: 'Los clientes que redimen puntos tienden a volver. Crea una base de clientes leales y recurrentes.',
      icono: 'fa-solid fa-heart',
      color: 'danger'
    },
    {
      titulo: 'Sin Costo de Implementación',
      descripcion: 'La instalación, configuración y entrenamiento del equipo son completamente gratis los primeros 30 días.',
      icono: 'fa-solid fa-gift',
      color: 'warning'
    },
    {
      titulo: 'Tecnología Simple',
      descripcion: 'Terminal moderna y fácil de usar que se integra perfectamente con tu operación actual.',
      icono: 'fa-solid fa-mobile-screen',
      color: 'info'
    },
    {
      titulo: 'Análisis en Tiempo Real',
      descripcion: 'Dashboard completo con métricas, reportes y análisis de comportamiento de tus clientes.',
      icono: 'fa-solid fa-chart-pie',
      color: 'secondary'
    }
  ];
}
