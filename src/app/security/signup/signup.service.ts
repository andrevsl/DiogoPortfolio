import { Injectable, EventEmitter, Injector } from '@angular/core';
import { CognitoAuthService } from '../cognitoauth/cognitoauth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class SignupService{
  notifiersignUp=new EventEmitter<string>()

  constructor(private injector:Injector){}


  onSignUp(SignData:any):Observable<any>{
    const cognitoauthService=this.injector.get(CognitoAuthService)
    ///console.log(SignData)
    return cognitoauthService.signUp(SignData)
  }

  handleSignUp(){
   this.notifiersignUp.emit("Display SignUp")
   }



}
