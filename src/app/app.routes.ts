import { Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { ProductosPageComponent } from './productos/pages/productos-page/productos-page.component';
import { ComponentsPageComponent } from './contact/pages/components-page/components-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },

  { path: 'productos', component: ProductosPageComponent },
  { path: 'contacto', component: ComponentsPageComponent },
  { path: '**', redirectTo: '/home' },
];
