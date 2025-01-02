import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  
  // fb = inject(FormBuilder);
  
  // formulario = this.fb.nonNullable.group({
  //     email:['',[Validators.email]],
  //     nombre:['',[Validators.required,Validators.minLength(3)]],
  //     texto:['Hola LU! Me gustaria saber mas sobre ...',]
  // })
  
  
}
