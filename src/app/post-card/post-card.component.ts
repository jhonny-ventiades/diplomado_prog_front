import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductPost } from '../model/product';
@Component({
  selector: 'app-post-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent { //este componente solo muestra 1 item (Producto, post) a la vez
  //inputs forma 1
  // @Input() mensaje: string = '';
  // @Input() precio: number = 0;
  // @Input() fecha: string = '';
  //inputs forma 2
  @Input() producto!: ProductPost; //solo 1 item a la vez

  @Output() avisarAlPadreMensajeCambiado = new EventEmitter<string>();


  imagen: string = 'https://www.eltiempo.com/files/image_640_428/uploads/2020/03/10/5e67f4b3e4f3d.jpeg';
  bloqueado: boolean = false;
  condicional: boolean = false;
  nombre: string = '';
  frutas: string[] = ['Manzana', 'Pera', 'Banano', 'Fresa', 'Uva', 'Kiwi'];
  cambiarMensaje(nuevoMensaje: string) {
    //this.mensaje = nuevoMensaje;
    this.avisarAlPadreMensajeCambiado.emit('this.mensaje');
    this.condicional = !this.condicional;
  }
 
}
