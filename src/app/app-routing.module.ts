import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

const routes: Routes = [
  {'path':'',component:CalculadoraMediaComponent},
  {'path':'calculadora',component:CalculadoraComponent},  
  {'path':'calculadora-media',component:CalculadoraMediaComponent},
  {'path':'cadastro-aluno',component:CadastroAlunoComponent},
  {'path':'apolice-seguro',component:ApoliceSeguroComponent},
  {'path':'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
