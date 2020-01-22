import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn:'root'
})

export class SignupService{
  notifiersignUp=new EventEmitter<string>()

  constructor(){}


  onSignUp(){
    return false
  }

  handleSignUp(){
   this.notifiersignUp.emit("SignUp")
   }



}
