import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = 'AppComponent';
  year = 2019;

  constructor() {
    setTimeout(() => {
      this.year = 2020;
    }, 5000);
  }
}
