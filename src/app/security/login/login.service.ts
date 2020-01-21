import { Injectable, Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationEnd} from '@angular/router'
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators';

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
      console.log(this.loginNotifier)
  }
}
