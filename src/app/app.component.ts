import { Component ,OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diogo';

  constructor(private route:Router,
              private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    console.log(this.route.url)
    console.log(this.activatedRoute.snapshot)
  }



}
