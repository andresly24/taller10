import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { RouterLink } from '@angular/router';
/*import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { DatosComponent } from './tabla/datos/datos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContratoComponent } from './shared/contrato/contrato.component';
import { RouterModule, Routes } from '@angular/router'; 



const routes : Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'datos',
    component: DatosComponent
  },
  {
    path:'acerca',
    component: AcercaComponent
  },
  {
    path:'contrato',
    component: ContratoComponent
  }
]
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 

export class AppComponent {
  title = 'clientAngular';

} 
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { } 

*/