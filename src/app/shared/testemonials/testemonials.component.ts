import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ds-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.css']
})
export class TestemonialsComponent implements OnInit {

  /*constructor(config:NgbCarouselConfig) {
  config.interval = 5000;
  config.wrap = false;
  config.showNavigationIndicators=true;
  config.showNavigationArrows = false;
  config.pauseOnHover = true; }*/
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;




  ngOnInit() {

  }

}
