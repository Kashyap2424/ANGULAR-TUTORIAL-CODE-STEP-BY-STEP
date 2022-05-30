import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Advance Pipes';

  user = {
    name: 'John Doe',
    age: 25,
    address: {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA',
    },
    friends: ['Jane', 'Mark', 'Bob'],
  };
}
