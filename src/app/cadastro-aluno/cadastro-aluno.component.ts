import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {

  formCadAluno : FormGroup;

  constructor() {
    this.formCadAluno = new FormGroup ({
      raAluno : new FormControl('',[Validators.required,Validators.max(6)]),
      nomeAluno : new FormControl('',[Validators.required]),
      emailAluno : new FormControl('',[Validators.required,Validators.email]),
      celularAluno : new FormControl('',[Validators.required])
    });
  }
}
