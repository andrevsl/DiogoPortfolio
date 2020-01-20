import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = false;
    config.showNavigationIndicators=true;
    config.showNavigationArrows = true;
    config.pauseOnHover = true;
   }

  ngOnInit() {
  }

}
