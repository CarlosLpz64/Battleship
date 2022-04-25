import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SesionesComponent } from './components/pages/sesiones/sesiones.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { TableroComponent } from './components/pages/tablero/tablero.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}, //Redirigir en ruta vacía
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'juego', component: TableroComponent},
  {path: 'partidas', component: SesionesComponent},
  {path: '**', component: NotFoundComponent} // La ruta "**" indica un 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
