import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Scroll, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'ds-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router,
              private viewportScroller:ViewportScroller) { }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
     const element = document.querySelector("#" + f)
     console.log(element)
     if (element) element.scrollIntoView()
   })
    //------ Scroll Port code ---
   // this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) =>
   //    { console.log(e);this.viewportScroller.scrollToAnchor(e.anchor);  });

 }

}
