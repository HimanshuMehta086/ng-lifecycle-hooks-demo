import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  label = 'PlaygroundComponent';

  constructor() {
    //  One-time notification
    console.log(`${this.label}: constructor`);
  }

  //  It is possible to write the lifecycle methods without
  //  explicitly implementing the interfaces
  //  But it is a good practice to implement the interfaces
  ngOnInit() {
    //  One-time notification
    //  Template rendering starts
    console.log(`${this.label}: ngOnInit`);
  }

  ngAfterContentInit(): void {
    //  One-time notification
    //  Called after projected content rendering ends
    //  Order: after ngOnInit, before ngAfterViewInit
    //  This will be called regardless of content-projection
    console.log(`${this.label}: ngAfterContentInit`);
  }

  ngAfterViewInit(): void {
    //  One-time notification
    //  Template rendering ends
    console.log(`${this.label}: ngAfterViewInit`);
  }
}

//  So far
//  1.  constructor
//  2.  ngOnInit
//  3.  ngAfterContentInit
//  4.  ngAfterViewInit
