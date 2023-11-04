import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {

  formApoliceSeguro : FormGroup;
  tipos = [
    { value:'F',name:'Feminino'  },
    { value:'M',name:'Masculino' },
  ];

  menorIdade = 18;

  constructor() {
    this.formApoliceSeguro = new FormGroup({
      nomeSegurado : new FormControl('',Validators.required),
      sexoSegurado : new FormControl(this.tipos[0],Validators.required),
      idadeSegurado: new FormControl(18,[Validators.max(90),Validators.min(18)]),
      valorSegurado: new FormControl(0,Validators.required)
    });
  }

  /*
    Crie um formulário de apólice para seguro automobilístico. Para isso o consultor preencherá: Nome do segurado, o sexo, a idade e o valor do automóvel. Mediante a regra abaixo calcule e exiba o valor da apólice de seguro:
    Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
    Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
    Se sexo for feminino: Valor da apólice = 8% do valor do automóvel
  */
  onSubmit() {
    if(this.formApoliceSeguro.valid) {
      
      let objSexo = this.formApoliceSeguro.get('sexoSegurado').value;
      let objIdade = this.formApoliceSeguro.get('idadeSegurado').value;
      let objValor = this.formApoliceSeguro.get('valorSegurado').value;

      
      if(objSexo == 'M' && objIdade <= 25) {
        alert((objValor * 0.15));
      }

      else if(objSexo == 'M' && objIdade > 25) {
        alert((objValor * 0.10));
      }

      else if(objSexo == 'F') {
        alert((objValor * 0.08));
      }
    }

    this.formApoliceSeguro.reset();
  }
}
