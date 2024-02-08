import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.scss']
})
export class DniComponent implements OnChanges {

  //lo va a recibir del padre
  @Input() tipoDocumento :string = 'DNI';
  formularioDocumento: FormGroup;

  newVariable: string = '';

 

  constructor(private form: FormBuilder){
    this.formularioDocumento = this.form.group({
      
      dni:['',[Validators.required]],
     

    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoDocumento'].currentValue);
    //si no detecta el primer cambio, entonces en valor es Tipo
   // this.newVariable = !changes?.['tipoDocumento'].firstChange ? changes?.['tipoDocumento'].currentValue : 'Tipo';
    this.newVariable = changes?.['tipoDocumento'].currentValue;
  }


  hasErrors(controlName:string, errorType:string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }

}


