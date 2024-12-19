import { Component } from '@angular/core';
import { ProductoInterface } from '../interface/producto-interface';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
})
export class ComponentsComponent {
  productos: ProductoInterface[] = [
    { type: 'taza', url: 'productosIMG/producto1.jpg' },
    { type: 'maceta', url: 'productosIMG/producto2.jpg' },
    { type: 'maceta', url: 'productosIMG/producto3.jpg' },
    { type: 'maceta', url: 'productosIMG/producto4.jpg' },
    { type: 'maceta', url: 'productosIMG/producto5.jpg' },
    { type: 'disco', url: 'productosIMG/producto6.jpg' },
    { type: 'disco', url: 'productosIMG/producto7.jpg' },
    { type: 'disco', url: 'productosIMG/producto6.jpg' },
    { type: 'disco', url: 'productosIMG/producto7.jpg' },
    { type: 'taza', url: 'productosIMG/producto1.jpg' },
    { type: 'taza', url: 'productosIMG/producto1.jpg' },
  ];
}
