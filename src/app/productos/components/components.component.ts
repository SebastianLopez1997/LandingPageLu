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
    { type: 'cuadro', url: 'productosIMG/producto8.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto9.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto10.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto11.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto12.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto13.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto14.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto15.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto16.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto17.jpg' },
    { type: 'llavero', url: 'productosIMG/producto18.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto19.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto20.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto21.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto22.jpg' },
    { type: 'mate', url: 'productosIMG/producto23.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto24.jpg' },
    { type: 'disco', url: 'productosIMG/producto25.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto26.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto27.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto28.jpg' },
    { type: 'mate', url: 'productosIMG/producto29.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto30.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto31.jpg' },
    { type: 'cuadro', url: 'productosIMG/producto32.jpg' },
  ];
}
