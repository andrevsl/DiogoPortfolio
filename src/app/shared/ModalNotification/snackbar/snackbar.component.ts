import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'
import { NotificationService } from '../notification.service';
import { tap,switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'ds-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility',[
      state('hidden',
        style({opacity:0,
                bottom: '20%'
              })),
      state('visible',
        style({opacity:1,
               bottom: '40%'
              })),
      transition('hidden=>visible',animate('500ms 0s ease-in')),
      transition('visible=>hidden',animate('300ms 0s ease-out'))
    ])

  ]
})


export class SnackbarComponent implements OnInit {
  message:string='Hello Guys'
  snackVisibility:string='hidden'
  CodeView:boolean=false
  codeForm:FormGroup
  text1="" //"Olá, Bem vindo"
  name="" //"Diogo"

  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.codeForm=new FormGroup({
      verifycode: new FormControl('',[Validators.required])
    })

    this.notificationService.notifier.pipe(
               tap(message=>{
                 this.message=message;
                 this.checkflag(message);
                 this.snackVisibility='visible';}),
               switchMap(message=>timer(3000))
             ).subscribe(timer=>{this.snackVisibility='hidden'})
  }
  checkflag(message){
    if(message.text!=="Code"){
      this.text1=message.text;
      this.name=message.name;
    }
    else if(message.text==="Code"){
      this.CodeView=true
      this.text1="Por favor, espere a confirmação Adminstrador";
      this.name=message.name;
    }



  }
/*  toggle(){
   this.snackVisibility=this.snackVisibility==='hidden' ? 'visible':'hidden'
 }*/

}
