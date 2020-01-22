import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../security/login/login.service';

@Component({
  selector: 'ds-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  isMenuCollapsed:boolean=false
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  logout(): boolean {
     return true;
   }

   handleLogin(){
     this.loginService.handleLogin("Login")
   }

  isLoggedIn(): boolean {
     return false;
   }

   isChosenMenu(){
     if(this.isMenuCollapsed===false){
       this.isMenuCollapsed=true
       }
     }
}
