import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Application';
  data = 'New Data is here!'

  getFuncationData() {
    return 'This is a function';
  }

  number = 100
}
