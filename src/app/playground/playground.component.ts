import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() prop;
  label = 'PlaygroundComponent';

  constructor() {
    console.log(`${this.label}: constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  First call before ngOnInit: only if the parent binds
    console.log(`${this.label}: ngOnChanges`, changes);
  }

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
//  1.  constructor
//  2.  ngOnChanges //  first call (on parent binding)
//  3.  ngOnInit
//  4.  ngAfterInit
//  ---------------
//  5.  ngOnChanges //  subsequent call (on parent binding)
