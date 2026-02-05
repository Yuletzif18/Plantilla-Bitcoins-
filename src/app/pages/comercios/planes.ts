import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.html',
  styleUrls: ['./planes.css']
})
export class PlanesComponent {
  title = 'Planes para tu Comercio';

  planes = [
    {
      nombre: 'Plan Básico',
      precio: '$99',
      descripcion: 'Perfecto para negocios pequeños',
      caracteristicas: [
        'Hasta 1 terminal',
        'Hasta 1000 transacciones/mes',
        'Reporte mensual',
        'Soporte por email',
        'Sin comisión en WinCoins'
      ],
      color: 'info'
    },
    {
      nombre: 'Plan Pro',
      precio: '$299',
      descripcion: 'Para negocios en crecimiento',
      caracteristicas: [
        'Hasta 3 terminales',
        'Hasta 10,000 transacciones/mes',
        'Reportes diarios',
        'Soporte prioritario',
        'Sin comisión en WinCoins',
        'Analytics avanzado'
      ],
      color: 'primary',
      destacado: true
    },
    {
      nombre: 'Plan Enterprise',
      precio: 'Personalizado',
      descripcion: 'Solución completa para grandes negocios',
      caracteristicas: [
        'Terminales ilimitadas',
        'Transacciones ilimitadas',
        'Reportes en tiempo real',
        'Soporte 24/7 dedicado',
        'API integración personalizada',
        'Consultoría estratégica'
      ],
      color: 'success'
    }
  ];

  preguntas = [
    {
      pregunta: '¿Hay costo de instalación?',
      respuesta: 'No, la instalación, entrenamiento y primeros 30 días son completamente gratis.'
    },
    {
      pregunta: '¿Puedo cambiar de plan después?',
      respuesta: 'Sí, puedes actualizar o degradar tu plan en cualquier momento según tus necesidades.'
    },
    {
      pregunta: '¿Qué incluye el soporte?',
      respuesta: 'El soporte incluye ayuda técnica, capacitación de personal y resolución de problemas.'
    },
    {
      pregunta: '¿Hay contratos de larga duración?',
      respuesta: 'No, todos nuestros planes son mes a mes sin compromisos de larga duración.'
    }
  ];
}
