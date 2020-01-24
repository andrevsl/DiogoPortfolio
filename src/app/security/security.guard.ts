import { Injectable } from '@angular/core';
import {CanLoad,CanActivate,Route,ActivatedRouteSnapshot,
            RouterStateSnapshot} from '@angular/router'
import { LoginService } from './login/login.service';
import { NotificationService } from '../shared/ModalNotification/notification.service';


@Injectable({
  providedIn:'root'
})

export class SecurityGuard implements CanLoad,CanActivate {

constructor(private loginService:LoginService,
            private notificationService:NotificationService){}


    checkAuthentication(path:string){
      const isLoggedIn=this.loginService.isLoggedIn()
         //return true //Disable guard
         if(!isLoggedIn){
          this.loginService.handleLogin("Login")
        //  console.log(isLoggedIn)
         }
         //console.log(isLoggedIn)
         return isLoggedIn;
    }

    canLoad(route:Route):boolean{
      console.log('CanLoad')
      return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute:ActivatedRouteSnapshot,
                routerStateSnapshot:RouterStateSnapshot):boolean{
      console.log(activatedRoute.routeConfig.path)
       return this.checkAuthentication(activatedRoute.routeConfig.path)
    }


}
