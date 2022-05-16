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
      socialAccounts: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/',
        },
      ],
    },
    {
      name: 'Rita',
      age: 38,
      socialAccounts: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/',
        },
      ],
    },
    {
      name: 'Kashyap',
      age: 19,
      socialAccounts: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/',
        },
      ],
    },
    {
      name: 'Krupa',
      age: 20,
      socialAccounts: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
        },
      ],
    },
    {
      name: 'Maitri',
      age: 5,
      socialAccounts: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
        },
      ],
    },
  ];
}
