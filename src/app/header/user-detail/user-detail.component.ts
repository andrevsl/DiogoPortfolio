import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LoginService } from '../../security/login/login.service';
import { SignupService } from 'src/app/security/signup/signup.service';
import { NotificationService } from 'src/app/shared/ModalNotification/notification.service';
import { CognitoAuthService } from 'src/app/security/cognitoauth/cognitoauth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ds-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService:LoginService,
              private signupService:SignupService,
              private notificationService:NotificationService,
              router:Router,
              private cognitoAuthService:CognitoAuthService) {
              //Debug Username
              // router.events.pipe(filter((e:any)=> e instanceof NavigationStart) )
              //         .subscribe(e=>console.log(this.loginService.getAuthenticatedUser().getUsername()))

            }

  ngOnInit() {
  }

  logout() {
      this.loginService.onLogout();
      console.log(this.cognitoAuthService.getAuthenticatedUser())
      this.notificationService.notifier.emit({text:"Obrigado pela Visita!",name:[]})
   }

   handleLogin(){
     this.loginService.handleLogin("Display Login")
   }


   handleSignUp(){
     this.signupService.handleSignUp()
   }


  isLoggedIn(): boolean {
     return this.loginService.isLoggedIn();
   }

  getUsername(){
   const user=this.loginService.getAuthenticatedUser().getUsername()
    console.log(user)
    return user
  }

}
