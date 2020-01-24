import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ds-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.css']
})
export class TestemonialsComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
  config.interval = 2000;
  config.wrap = true;
  config.showNavigationIndicators=true;
  config.showNavigationArrows = false;
  config.pauseOnHover = true; }
    // paused = false;
    // unpauseOnArrow = false;
    // pauseOnIndicator = false;
    // pauseOnHover = true;
    // showNavigationArrows=false;
    // showNavigationIndicators=false;
    //
    // @ViewChild('carousel', {static : true}) carousel: NgbCarousel;




  ngOnInit() {

  }

}
