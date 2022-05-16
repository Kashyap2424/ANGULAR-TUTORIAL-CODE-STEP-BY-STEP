import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'For Loop';

  users = [
    {
      name: 'Haresh',
      age: 39,
    },
    {
      name: 'Rita',
      age: 38,
    },
    {
      name: 'Kashyap',
      age: 19,
    },
    {
      name: 'Krupa',
      age: 20,
    },
    {
      name: 'Maitri',
      age: 5,
    },
  ];
}
