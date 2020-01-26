import { Component ,OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, Scroll, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common'
import { LoginService } from './security/login/login.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diogo';
  dataRoute:boolean
  firebaseauth:boolean=false

  constructor(private router:Router,
              private location:Location,
              private loginS:LoginService,
              private activatedRoute: ActivatedRoute){
                router.events.pipe(
      filter((e: Event) => e instanceof NavigationEnd))
    .subscribe(e => { window.scrollTo(0, 0)});

  }

  ngOnInit(){
    this.router.events.subscribe( (e) => {
         if (e instanceof NavigationStart) {
           if ((e.url === "/datavision")&&(this.loginS.isLoggedIn())) {
               console.log(e.url);
               this.dataRoute=true;
           } else {
               //console.log(this.location.path());
               this.dataRoute=false;;
           }
         }
       })
     }

isFirebaseBaas(){
 if(this.firebaseauth===true){
   return true
  }
 return false
}


}
