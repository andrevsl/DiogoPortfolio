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

  loginForm: FormGroup;
  navigateTo:string;

  constructor(private loginService:LoginService) { }
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
  this.loginService.onLogin(this.loginForm.value.Username,
                            this.loginForm.value.Password)
  }


}
