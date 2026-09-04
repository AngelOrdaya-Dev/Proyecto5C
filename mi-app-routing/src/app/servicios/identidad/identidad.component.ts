import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-identidad',
  standalone: true,

  // RouterLink permite que funcionen los botones
  // que utilizan routerLink="/servicios" y routerLink="/contact"
  imports: [RouterLink],

  // HTML de la página
  templateUrl: './identidad.component.html',

  // CSS propio de esta página
 styleUrls: ['../servicios-detalle.css']
})
export class IdentidadComponent {
}

