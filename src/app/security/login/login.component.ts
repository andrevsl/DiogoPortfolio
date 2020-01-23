import { Component, OnInit, ViewChild, AfterViewInit, Injector } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {tap,switchMap} from 'rxjs/operators'
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from './login.service';
import { SignupService } from '../signup/signup.service';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/ModalNotification/notification.service';

@Component({
  selector: 'ds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit  {

  loginForm: FormGroup;
  navigateTo:string;
  resp:any=[]
  VerificationMessage:boolean=false

  constructor(private loginService:LoginService,
              private injector:Injector) { }
  showLogin:boolean=false

  @ViewChild('frame',{static:true}) frame: ModalDirective;

  ngOnInit() {
    this.loginForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });
  //const loginService=this.injector.get(LoginService)
  this.loginService.loginNotifier.
                                subscribe(message=>{this.showLogin=true;
                                                   this.frame.show();
                                                    console.log("Diplayed "+message)
                                                  })
  }

 ngAfterViewInit(){
    if(this.showLogin){
        this.frame.show()
        }
 }

 onLogin(){
  const username=this.loginForm.value.Username;
  const password=this.loginForm.value.Password;
  const resp=this.loginService.onLogin(username,password)
              .subscribe((data)=>{
                this.resp=data.idToken;
                this.frame.hide();
                const notificationService=this.injector.get(NotificationService)
                notificationService.notifier.emit({text:"Seja Bem vindo",name:username})
                },
                (err)=>{
                this.VerificationMessage = true;
              })

              console.log(this.resp)

  }

  handleSignUp(){
    const signupService=this.injector.get(SignupService)
    signupService.notifiersignUp.emit("Display SignUp")
    this.frame.hide()
   }

}
