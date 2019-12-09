import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterViewInit {
  label = 'PlaygroundComponent';

  constructor() {
    console.log(`${this.label}: constructor`);
  }

  //  It is possible to write the lifecycle methods without
  //  explicitly implementing the interfaces
  //  But it is a good practice to implement the interfaces
  ngOnInit() {
    //  Template rendering starts
    console.log(`${this.label}: ngOnInit`);
  }

  ngAfterViewInit(): void {
    //  Template rendering ends
    console.log(`${this.label}: ngAfterViewInit`);
  }
}

//  So far:
//  1.  AppComponent constructor
//  2.  PlaygroundComponent constructor
//  3.  AppComponent ngOnInit
//  4.  PlaygroundComponent ngOnInit
//  5.  PlaygroundComponent ngAfterInit
//  6.  AppComponent ngAfterInit
