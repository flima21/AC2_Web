import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})
export class CalculadoraMediaComponent {
  	
    formCalculadora : FormGroup;
    media : number;

    constructor() {
      this.media = 0;

      // Initialize the value formgroup
      this.formCalculadora = new FormGroup({
        grade_ac1: new FormControl(0,[Validators.required,Validators.min(0)]),
        grade_ac2: new FormControl(0,[Validators.required,Validators.min(0)]),
        grade_af: new FormControl(0,[Validators.required,Validators.min(0)]),
        grade_ag: new FormControl(0,[Validators.required,Validators.min(0)]),
        grade_final_media: new FormControl({value:0,disabled:true})
      });
    }

    onCalcula() {
      if(this.formCalculadora.valid) {
        let obj_ac1 = this.formCalculadora.get('grade_ac1');
        let obj_ac2 = this.formCalculadora.get('grade_ac2');
        let obj_ag = this.formCalculadora.get('grade_ag');
        let obj_af = this.formCalculadora.get('grade_af');

        let value_ac1 = 0;
        let value_ac2 = 0;
        let value_ag  = 0;
        let value_af  = 0;
        
        if(obj_ac1.value == null) value_ac1 = 0; else value_ac1 = obj_ac1.value;
        if(obj_ac2.value == null) value_ac2 = 0; else value_ac2 = obj_ac2.value;
        if(obj_ag.value == null ) value_ag  = 0; else value_ag  = obj_ag.value;
        if(obj_af.value == null ) value_af  = 0; else value_af  = obj_af.value;

        // Média Final = (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)
        this.media = ((value_ac1 * 0.15) + (value_ac2 * 0.3) + (value_ag * 0.1) + (value_af * 0.45));
        this.formCalculadora.patchValue({'grade_final_media':this.media}); // Atribui o valor
      }
    }
}
