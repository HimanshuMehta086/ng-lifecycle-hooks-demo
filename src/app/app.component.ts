import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = 'AppComponent';
  predicate = false;

  constructor() {
    setTimeout(() => {
      this.predicate = true;
    }, 5000);
  }
}
