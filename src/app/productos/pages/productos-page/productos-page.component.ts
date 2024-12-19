import { Component } from '@angular/core';
import { ComponentsComponent } from '../../components/components.component';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [ComponentsComponent],
  templateUrl: './productos-page.component.html',
  styleUrl: './productos-page.component.css'
})
export class ProductosPageComponent {

}
