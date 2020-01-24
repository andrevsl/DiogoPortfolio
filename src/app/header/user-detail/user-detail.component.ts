import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../security/login/login.service';
import { SignupService } from 'src/app/security/signup/signup.service';
import { NotificationService } from 'src/app/shared/ModalNotification/notification.service';
import { CognitoAuthService } from 'src/app/security/cognitoauth/cognitoauth.service';

@Component({
  selector: 'ds-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService:LoginService,
              private signupService:SignupService,
              private notificationService:NotificationService,
              private cognitoAuthService:CognitoAuthService) { }

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


}
