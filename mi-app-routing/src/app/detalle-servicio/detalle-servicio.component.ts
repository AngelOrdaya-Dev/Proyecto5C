import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-servicio',
  standalone: true,
  imports: [RouterLink],

  templateUrl: './detalle-servicio.component.html',

  styleUrl: './detalle-servicio.component.css'
})
export class DetalleServicioComponent {

  // Variable donde guardaremos el nombre del servicio
  servicio: string = '';

  // Constructor
  // ActivatedRoute permite leer la URL actual
  constructor(private route: ActivatedRoute) {

    // Obtiene el último segmento de la URL
    const tipo = this.route.snapshot.url[1]?.path;

    // Guardamos el tipo de servicio
    this.servicio = tipo || '';

  }

}

