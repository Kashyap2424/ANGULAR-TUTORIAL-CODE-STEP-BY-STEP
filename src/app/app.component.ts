import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Basic Pipes';

  today = new Date();

  convertToUpperCase(value: string) {
    return value.toLowerCase();
  }
}
