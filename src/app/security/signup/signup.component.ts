import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { SignupService } from './signup.service';

@Component({
  selector: 'ds-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,AfterViewInit {

  signUpForm:FormGroup
  showSignup:boolean=true
  emailPattern=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private fb:FormBuilder,
              private signupService:SignupService) {}

  @ViewChild('frameS',{static:true}) frameS:ModalDirective

  ngOnInit() {
    this.signUpForm=this.fb.group({
     name: this.fb.control('',[Validators.required]),
     givenname: this.fb.control('',[Validators.required]),
     username:this.fb.control('',[Validators.required]),
     password:this.fb.control('',[Validators.required]),
     copassword:this.fb.control('',[Validators.required]),
     email:this.fb.control('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)])
    })

     this.signupService.notifiersignUp
                      .subscribe(message =>{this.frameS.show();
                                            this.showSignup=true;
                                            console.log("Display SignUp");
                                            })

  }

  onSignUp(){

  }

  ngAfterViewInit(){
     if(this.showSignup){
         this.frameS.show()
         }
  }
}
