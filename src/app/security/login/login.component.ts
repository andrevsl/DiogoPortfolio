import { Component, OnInit, ViewChild, AfterViewInit, Injector } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms'
import {ActivatedRoute, Router, NavigationEnd, RoutesRecognized} from '@angular/router'
import {tap,switchMap, filter, pairwise} from 'rxjs/operators'
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from './login.service';
import { SignupService } from '../signup/signup.service';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/ModalNotification/notification.service';
import { CognitoAuthService } from '../cognitoauth/cognitoauth.service';

@Component({
  selector: 'ds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit  {
  prevUrl:string
  nextUrl:string
  loginForm: FormGroup;
  navigateTo:string;
  resp:any=[]
  VerificationMessage:boolean=false
  showLogin:boolean=false

  constructor(private loginService:LoginService,
              private injector:Injector,
              private router:Router)
              {
                router.events.pipe(filter((e:any)=> e instanceof RoutesRecognized),pairwise())
                                      .subscribe((e:RoutesRecognized[])=>
                                            {
                                              this.prevUrl=e[0].urlAfterRedirects;
                                              console.log('previous url', e[0].urlAfterRedirects);
                                              this.nextUrl=e[1].urlAfterRedirects;
                                              console.log('current url', e[1].urlAfterRedirects);
                                            })
              }


  @ViewChild('frame',{static:true}) frame: ModalDirective;

  ngOnInit() {
      this.loginForm = new FormGroup({
        Username: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required)
      });
  //const loginService=this.injector.get(LoginService)
      this.loginService.loginNotifier
          .subscribe(message=>{this.showLogin=true;
                              this.frame.show();
                              console.log("Diplayed "+message)
                            })
                          //  console.log(this.loginService.isLoggedIn())

     }

 ngAfterViewInit(){
    if(this.showLogin){
        this.frame.show()
        }
        //const authuser=this.injector.get(CognitoAuthService)
        //authuser.getAuthenticatedUser()
      // console.log(authuser)
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
                console.log(this.loginService.isLoggedIn())
                //console.log("Prev: "+this.prevUrl)
                //console.log("Next: "+this.nextUrl)
                this.router.navigateByUrl(this.nextUrl)
                },
                (err)=>{
                this.VerificationMessage = true;
                this.router.navigate(['/'])
              })

              //console.log(this.resp)

  }

  handleSignUp(){
    const signupService=this.injector.get(SignupService)
    signupService.notifiersignUp.emit("Display SignUp")
    this.frame.hide()
   }

}
