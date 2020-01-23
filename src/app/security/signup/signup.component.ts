import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { SignupService } from './signup.service';
import { NotificationService } from 'src/app/shared/ModalNotification/notification.service';

@Component({
  selector: 'ds-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,AfterViewInit {

  signUpForm:FormGroup
  showSignup:boolean=false
  emailPattern=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  VerificationMessage:boolean=false
  resp:any=[]
  constructor(private fb:FormBuilder,
              private notificationService:NotificationService,
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
  const SignData={
     'name':this.signUpForm.value.name,
     'gname':this.signUpForm.value.givenname,
     'username':this.signUpForm.value.username,
     'email':this.signUpForm.value.email,
     'password':this.signUpForm.value.password,
   }

    const response=this.signupService.onSignUp(SignData)
              .subscribe(
                (data)=>{
                this.resp=data;//console.log(this.resp);
                this.frameS.hide();
                this.showSignup=false;
                this.notificationService.notifier.emit({text:"Code",name:name});
                },
                (err)=>{
                 console.log(err);
                 this.VerificationMessage=true;

              })

  }

  ngAfterViewInit(){
     if(this.showSignup){
         this.frameS.show()
         }
  }
}
