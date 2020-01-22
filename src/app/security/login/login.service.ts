import { Injectable, Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationEnd} from '@angular/router'
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators';
import { CognitoAuthService } from '../cognitoauth/cognitoauth.service';
import { SignupService } from '../signup/signup.service';

@Injectable()

export class LoginService {
loginNotifier=new EventEmitter <string>()
lastUrl:string;

constructor(private injector:Injector){
    const router=this.injector.get(Router)
    router.events.pipe(filter(e=> e instanceof NavigationEnd))
                          .subscribe((e:NavigationEnd)=>this.lastUrl=e.url)
}

handleLogin(message:string){
      this.loginNotifier.emit(message);
  }

handleSignUp(message:string){
        const signUpService=this.injector.get(SignupService)
        signUpService.notifiersignUp.emit("Diplay SignUp");
    }

onLogin(email:string,password:string){
        const cognitoAuthService=this.injector.get(CognitoAuthService)
        cognitoAuthService.signUp(email,password)
    }
}
