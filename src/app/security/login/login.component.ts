import { Component, OnInit, ViewChild, AfterViewInit, Injector } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {tap,switchMap} from 'rxjs/operators'
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from './login.service';

@Component({
  selector: 'ds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit  {
  loginForm:FormGroup
  validatingForm: FormGroup;
  navigateTo:string;
  emailPattern=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private loginService:LoginService) { }
  showLogin:boolean=false

  @ViewChild('frame',{static:true}) frame: ModalDirective;

  ngOnInit() {
    this.validatingForm = new FormGroup({
    loginFormModalEmail: new FormControl('', [Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
    loginFormModalPassword: new FormControl('', Validators.required)
  });
  //const loginService=this.injector.get(LoginService)
  this.loginService.loginNotifier.
                                subscribe(message=>{this.showLogin=true;this.frame.show();console.log("Comp"+message)})

  console.log(this.showLogin)

  }

 ngAfterViewInit(){
    if(!this.showLogin){
       this.frame.show()
    }

 }




}
