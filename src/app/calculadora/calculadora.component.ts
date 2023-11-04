import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  formCalculadora : FormGroup;
  symbolsOperator = [
    { symbol:'+', name:'Soma'          },
    { symbol:'-', name:'Subtração'     },
    { symbol:'/', name:'Divisão'       },
    { symbol:'*', name:'Multiplicação' },
  ];
  
  constructor() {
    this.formCalculadora = new FormGroup({
      
      value_1: new FormControl(0,Validators.required),
      value_2: new FormControl(0,Validators.required),
      operator: new FormControl(this.symbolsOperator[0],Validators.required),
      
      result: new FormControl({'value':0,disabled:true},Validators.required)
    });
  }

  onCalcula() {
    if(this.formCalculadora.valid) {
      let valueNumberOne = parseInt(this.formCalculadora.get('value_1').value); 
      let valueNumberTwo = parseInt(this.formCalculadora.get('value_2').value);

      if (valueNumberOne == 0 && valueNumberTwo == 0) {
        this.formCalculadora.patchValue({'result':0});
      } 
      else {
        let symbolOperator = this.formCalculadora.get('operator').value;

        let valueResult = 0;

        switch(symbolOperator) {
          case '+': valueResult = (valueNumberOne + valueNumberTwo); break;
          case '/': valueResult = (valueNumberOne / valueNumberTwo); break;
          case '*': valueResult = (valueNumberOne * valueNumberTwo); break;
          case '-': valueResult = (valueNumberOne - valueNumberTwo); break;
        }
        this.formCalculadora.patchValue({'result':valueResult});
      }
      
      

      
    }    
  }

}
