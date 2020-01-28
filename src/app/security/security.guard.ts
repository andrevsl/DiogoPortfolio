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
          console.log("User is Logged: "+ isLoggedIn)
         }
         console.log("User is Logged: "+ isLoggedIn)
         return isLoggedIn;
    }
    checkAuthAdmin(path:string){

      const isLoggedIn=this.loginService.isLoggedIn()

         //return true //Disable guard
         if(!isLoggedIn){

         this.loginService.handleLogin("Login")
         if(isLoggedIn){
          const username=this.loginService.getAuthenticatedUser().getUsername()
          if(username!=="admin") {
            this.loginService.handleLogin("Login")
            return false
            }
          }
         }
         else {
           const username=this.loginService.getAuthenticatedUser().getUsername()
           if(isLoggedIn&&(username==='admin')){
           console.log("User is Logged: "+ isLoggedIn)
           return isLoggedIn;
         }
        }
        this.loginService.handleLogin("Login")
    }
    canLoad(route:Route):boolean{
      console.log('CanLoad')
      return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute:ActivatedRouteSnapshot,
                routerStateSnapshot:RouterStateSnapshot):boolean{
       const path=activatedRoute.routeConfig.path
       console.log("Target Path for Guarding:"+path)

       if(path!=='datavision'){
         return this.checkAuthentication(activatedRoute.routeConfig.path)
       }
       return this.checkAuthAdmin(activatedRoute.routeConfig.path)
    }


}
