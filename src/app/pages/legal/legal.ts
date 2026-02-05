import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

export interface LegalSection {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.html',
  styleUrls: ['./legal.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LegalComponent {
  activeTab = 'terminos';

  terminos: LegalSection[] = [
    {
      titulo: '1. Uso del Servicio',
      contenido: 'Winners es un sistema de lealtad que permite a los usuarios acumular y redimir puntos (WinCoins) en comercios afiliados. Nuestro servicio está disponible para residentes en El Salvador mayores de edad.'
    },
    {
      titulo: '2. Registro de Usuario',
      contenido: 'Para utilizar nuestros servicios, debe registrarse y proporcionar información precisa y actualizada. Es responsabilidad del usuario mantener la confidencialidad de sus credenciales de acceso.'
    },
    {
      titulo: '3. Acumulación de WinCoins',
      contenido: 'Los WinCoins se acumulan mediante compras en comercios afiliados. La tasa de acumulación puede variar según el comercio. Winners se reserva el derecho de modificar las tasas de acumulación con previo aviso.'
    },
    {
      titulo: '4. Redención de WinCoins',
      contenido: 'Los WinCoins pueden ser redimidos en comercios afiliados de acuerdo con las condiciones establecidas por cada comercio. Winners no es responsable por las políticas individuales de los comercios.'
    },
    {
      titulo: '5. Responsabilidad',
      contenido: 'Winners no será responsable por daños directos, indirectos o incidentales derivados del uso de nuestros servicios. El usuario utiliza los servicios bajo su propio riesgo.'
    },
    {
      titulo: '6. Modificaciones',
      contenido: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Le notificaremos de cambios significativos a través de nuestra aplicación o correo electrónico.'
    }
  ];

  privacidad: LegalSection[] = [
    {
      titulo: 'Información que recopilamos',
      contenido: 'Recopilamos información personal como nombre, correo electrónico, número de teléfono e información de identidad (DUI). También recopilamos información sobre sus transacciones y uso de nuestros servicios.'
    },
    {
      titulo: 'Cómo utilizamos su información',
      contenido: 'Utilizamos su información para operar nuestros servicios, procesar transacciones, prevenir fraude y mejorar nuestros productos. No vendemos su información personal a terceros sin su consentimiento.'
    },
    {
      titulo: 'Seguridad de datos',
      contenido: 'Implementamos medidas de seguridad estándar de la industria para proteger su información personal. Sin embargo, ningún sistema es completamente seguro.'
    },
    {
      titulo: 'Cookies y tecnología similar',
      contenido: 'Utilizamos cookies y tecnología similar para mejorar su experiencia. Puede controlar las cookies a través de la configuración de su navegador.'
    },
    {
      titulo: 'Derechos del usuario',
      contenido: 'Tiene el derecho de acceder, corregir o eliminar su información personal. Contáctenos en soporte@winners.sv para ejercer estos derechos.'
    },
    {
      titulo: 'Cambios en esta política',
      contenido: 'Podemos actualizar esta política de privacidad en cualquier momento. Le notificaremos de cambios significativos.'
    }
  ];
}
