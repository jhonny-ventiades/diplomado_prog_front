import { Component } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list-component',
  imports: [PostCardComponent, CommonModule],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent {
  productos = [
    {mensaje: 'Producto 1', precio: 1000, fecha: new Date().toDateString()},
    {mensaje: 'Producto 2', precio: 1000, fecha: "10/02/2025" },
    {mensaje: 'Producto 3', precio: 1000, fecha: "10/03/2025"},
  ]

  mensajeActualizado(mensaje: string) {
    alert('Mensaje actualizado: ' + mensaje);
  }
}
