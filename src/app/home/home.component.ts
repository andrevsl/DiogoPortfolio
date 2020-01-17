import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'

@Component({
  selector: 'ds-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('NameAppeared',[
      state('ready',style({
        opacity: 1,
        visibility: 'visible'
      })),
      transition('void=>ready',[
        style({opacity:0,visibility:'visible',transform:'translate(0,50px)'}),
        animate('700ms 0s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  NameState='ready'
  constructor() { }

  ngOnInit() {
  }

}
