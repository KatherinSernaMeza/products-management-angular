import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss',
  standalone: true,
})
export class HomeDashboardComponent {
  rutaImagen: string = 'assets/img/home.jpg';
}
