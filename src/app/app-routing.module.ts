import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';

const routes: Routes = [
  {'path':'calculadora-media',component:CalculadoraMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
