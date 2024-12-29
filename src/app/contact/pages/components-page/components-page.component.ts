import { Component } from '@angular/core';
import { ComponentsComponent } from '../../components/components/components.component';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [ComponentsComponent],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.css'
})
export class ComponentsPageComponent {

}
