import { Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { ProductosPageComponent } from './productos/pages/productos-page/productos-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },

  { path: 'productos', component: ProductosPageComponent },
  { path: '**', redirectTo: '/home' },
];
