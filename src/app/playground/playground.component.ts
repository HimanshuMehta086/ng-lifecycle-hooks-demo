import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  DoCheck,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    DoCheck,
    AfterViewChecked,
    AfterContentChecked,
    OnChanges {
  label = 'PlaygroundComponent';
  @Input() year;

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

  ngDoCheck(): void {
    //  multiple calls
    //  notifies the start of the change detection
    //  fires for the first time after ngOnInit and before ngAfterContentInit
    //  fires for the second time after ngAfterViewInit
    //  subsequently, fires when any data-binding changes (value, property, and event)
    console.log(`${this.label}: ngDoCheck`);
  }

  ngAfterViewChecked(): void {
    //  multiple calls
    //  notifies the end of change detection cycle for the component and its children
    //  first fires after ngAfterViewInit but before the second ngDoCheck
    console.log(`${this.label}: ngAfterViewChecked`);
  }
  ngAfterContentChecked(): void {
    //  multiple calls
    //  notifies the end of change detection cycle for the projected content
    //  first fires after ngAfterContentInit but before ngAfterViewInit
    console.log(`${this.label}: ngAfterContentChecked`);
  }

  handler() {
    //   Call to handler causes
    //   A.  ngDoCheck //  subsequent run
    //   B.  ngAfterContentChecked
    //   C.  ngAfterViewChecked
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.label}: ngOnChanges`, changes);
  }
}

//  So far
//   1.  constructor
//   2.  ngOnInit
//   3.  ngDoCheck //  first run
//   4.  ngAfterContentInit
//   5.  ngAfterContentChecked
//   6.  ngAfterViewInit
//   7.  ngAfterViewChecked
//   8.  ngDoCheck //  second run
//   9.  ngAfterContentChecked
//  10.  ngAfterViewChecked
//  -----------------------------
//   A.  ngOnChanges //  subsequent run
//   B.  ngDoCheck //  subsequent run
//   C.  ngAfterContentChecked
//   D.  ngAfterViewChecked
