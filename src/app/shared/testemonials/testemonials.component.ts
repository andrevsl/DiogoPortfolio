import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ds-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.css']
})
export class TestemonialsComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
  config.interval = 5000;
  config.wrap = false;
  config.showNavigationIndicators=true;
  config.showNavigationArrows = false;
  config.pauseOnHover = false; }

  ngOnInit() {
  }

}
