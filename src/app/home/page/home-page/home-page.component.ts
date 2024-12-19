import { Component } from '@angular/core';
import { ComponentsComponent } from '../../components/components.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ComponentsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
