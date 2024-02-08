import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit, OnDestroy{

  public user: any = {
    name: '',
    email: ''
  }

    usuarioActivo: any = {
      name: 'Pepe',
      lastname: 'Grillo',
      dni: '12345678'
    }

  formularioReactivo: FormGroup;
  tipoDocumento :string = '';
  mostrarDocumento : boolean = false;

  constructor(private form: FormBuilder){
    this.formularioReactivo = this.form.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      lastname:['',  [Validators.required]],
      tipoDocumento:[],
      email:['', [Validators.required, Validators.email]]

    })
  }

  ngOnInit(): void {
   /* this.formularioReactivo.get('lastname')?.clearValidators();
    this.formularioReactivo.get('lastname')?.updateValueAndValidity();
    //this.formularioReactivo.get('name')?.setValue(this.usuarioActivo);
 
    // para seter varios campos que quieras del formulario
    this.formularioReactivo.patchValue({
      name: this.usuarioActivo.name,
      dni: this.usuarioActivo.dni,

    })
    this.formularioReactivo.get('name')?.disable();
    this.formularioReactivo.get('dni')?.disable();*/
    this.formularioReactivo.valueChanges.subscribe(valor => {
      console.log(valor);
    })
    this.formularioReactivo.get('tipoDocumento')?.valueChanges.subscribe(value => {
      this.mostrarDocumento = value != ''
      this.tipoDocumento = value
    })
  }
  
  ngOnDestroy(): void {
    console.log('Se destruyo en componente');
  }

  enviar(){
  //  console.log(this.user);
  console.log(this.formularioReactivo)
  }

  hasErrors(controlName:string, errorType:string){
    return this.formularioReactivo.get(controlName)?.hasError(errorType) && this.formularioReactivo.get(controlName)?.touched;
  }

}
