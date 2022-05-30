import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reusable Components';

  userDetails = [
    {
      name: 'John Doe',
      age: 25,
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: 90210,
    },
    {
      name: 'Jane Doe',
      age: 32,
      address: '456 Elm St',
      city: 'Middletown',
      state: 'NY',
      zip: 45701,
    },
    {
      name: 'James Doe',
      age: 55,
      address: '789 Broadway',
      city: 'New York',
      state: 'NY',
      zip: 10001,
    },
  ];
}
