/*import { Routes } from '@angular/router';*/
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { DatosComponent } from './tabla/datos/datos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContratoComponent } from './shared/contrato/contrato.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'home',
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
      },
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { } 
  
