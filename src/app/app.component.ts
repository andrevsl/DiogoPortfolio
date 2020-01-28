import { Component ,OnInit, AfterViewInit, PLATFORM_ID, Inject} from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, Scroll, NavigationEnd, RoutesRecognized } from '@angular/router';
import {Location, ViewportScroller, isPlatformServer} from '@angular/common'
import { LoginService } from './security/login/login.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diogo';
  dataRoute:boolean
  firebaseauth:boolean=false
   private widgetUrls: any[] = ['questions', 'answers', 'results']
   private routeSubscription: Subscription
   private url: string
  constructor(private router:Router,
              private location:Location,
              private viewPortScroller: ViewportScroller,
              @Inject(PLATFORM_ID) private platformId: Object,
              private loginS:LoginService,
              private activatedRoute: ActivatedRoute){
      //           router.events.pipe(filter(event => event instanceof NavigationEnd))
      // .subscribe((event: NavigationEnd) => {
      //
      //   // Angular v7+
      // console.log(this.viewPortScroller.getScrollPosition())
      // });


  }

  ngOnInit(){
    this.router.events.subscribe( (e) => {
         if (e instanceof NavigationStart) {
           if ((e.url === "/datavision")&&(this.loginS.isLoggedIn()
         )&&(this.loginS.getAuthenticatedUser().getUsername()==='admin')) {
               //console.log(this.loginS.getAuthenticatedUser().getUsername()==='admin');
               this.dataRoute=true;
           } else {
               //console.log(this.location.path());
               this.dataRoute=false;;
           }
           //Scroll to top always
           const element = document.querySelector("#TopPage")
           console.log(element)
           if (element) element.scrollIntoView()

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
