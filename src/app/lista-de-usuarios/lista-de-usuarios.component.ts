import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss']
})

export class ListaDeUsuariosComponent {
  alumnos = [
    {
      nombre: 'Mauro',
      fechaInsc: new Date(),
      aprobado: true,
    },
    {
      nombre: 'Pablo',
      fechaInsc: new Date(),
      aprobado: true,
    },
    {
      nombre: 'Robert',
      fechaInsc: new Date(),
      aprobado:false,
    },
    {
      nombre: 'Lorena',
      fechaInsc: new Date(),
      aprobado: true,
    },
    {
      nombre: 'Candela',
      fechaInsc: new Date(),
      aprobado: true,
    },
    {
      nombre: 'Francisco',
      fechaInsc: new Date(),
      aprobado: false,
    },
  ]
}
