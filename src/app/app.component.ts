import { Component ,OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart } from '@angular/router';
import {Location} from '@angular/common'
import { LoginService } from './security/login/login.service';

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
                //router.events.subscribe((url:any) => console.log([url['url']]));
                //console.log(this.router.url)
                 //console.log( this.activatedRoute.url.subscribe(url => console.log(url)))

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
