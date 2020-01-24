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

  constructor(private injector:Injector,
              private router:Router){}

  handleLogin(message:string, path?:string){
        this.loginNotifier.emit(message);

      }


  onLogin(username:string,password:string):Observable<any>{
          const cognitoAuthService=this.injector.get(CognitoAuthService)
          return cognitoAuthService.onLogin(username,password)
      }

  isLoggedIn():boolean{
    const cognitoAuthService=this.injector.get(CognitoAuthService)

          return cognitoAuthService.isLoggedIn();

      }

  onLogout():boolean{
    const cognitoAuthService=this.injector.get(CognitoAuthService)
        this.router.navigate(['/'])
       //console.log(cognitoAuthService.getUserAttributes())
       return cognitoAuthService.onLogOut();
  }
}
