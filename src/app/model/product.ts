export class ProductPost { 
  mensaje!: string; 
  precio: number; 
  fecha: string; 

  constructor() {
    this.mensaje = 'Sin mensajes';
    this.precio = 0;
    this.fecha = '';
  }
};