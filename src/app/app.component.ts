import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  label = 'AppComponent';

  constructor() {
    console.log(`${this.label}: constructor`);
  }

  ngOnInit(): void {
    //  Starts after child constructor, before child ngOnInit
    console.log(`${this.label}: ngOnInit`);
  }

  ngAfterViewInit(): void {
    //  Ends after all children have been rendered (after all child ngAfterViewInit)
    console.log(`${this.label}: ngAfterViewInit`);
  }
}
