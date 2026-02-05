import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acumula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acumula.html',
  styleUrls: ['./acumula.css']
})
export class AcumulaComponent {
  titulo = 'Acumula WinCoins';
  
  pasos = [
    {
      numero: 1,
      titulo: 'Descarga la App',
      descripcion: 'Descarga Winners desde Google Play o App Store',
      icono: 'fa-solid fa-download'
    },
    {
      numero: 2,
      titulo: 'Regístrate',
      descripcion: 'Crea tu cuenta con tu DUI y datos personales',
      icono: 'fa-solid fa-user-plus'
    },
    {
      numero: 3,
      titulo: 'Ve a un comercio',
      descripcion: 'Compra en cualquiera de nuestros comercios aliados',
      icono: 'fa-solid fa-store'
    },
    {
      numero: 4,
      titulo: 'Acumula WinCoins',
      descripcion: 'Automáticamente acumularás puntos en tu cuenta',
      icono: 'fa-solid fa-coins'
    }
  ];

  beneficios = [
    {
      titulo: 'Sin comisión',
      descripcion: 'Acumula tus WinCoins sin pagar comisión adicional',
      icono: 'fa-solid fa-check-circle'
    },
    {
      titulo: 'Válidos por 2 años',
      descripcion: 'Tus puntos no vencen. ¡Acumula todo lo que quieras!',
      icono: 'fa-solid fa-clock'
    },
    {
      titulo: 'Transferibles',
      descripcion: 'Puedes transferir WinCoins a otros usuarios',
      icono: 'fa-solid fa-exchange'
    },
    {
      titulo: 'Red de comercios',
      descripcion: 'Acumula en más de 100 comercios en todo el país',
      icono: 'fa-solid fa-globe'
    }
  ];
}
