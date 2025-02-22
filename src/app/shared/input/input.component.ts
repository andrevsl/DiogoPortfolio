import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel,FormControlName} from '@angular/forms'

@Component({
  selector: 'ds-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip:boolean=true

  input:any

 @ContentChild(NgModel,{static:false}) model: NgModel
 @ContentChild(FormControlName,{static:false}) control: FormControlName


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input=this.model|| this.control
    if(this.input===undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel of formsGroup')
    }
  }
  hasSuccess(): boolean{
   return this.input.valid && (this.input.dirty || this.input.touched)
 }

 hasError(): boolean{
   return this.input.invalid && (this.input.dirty || this.input.touched)
 }

}
