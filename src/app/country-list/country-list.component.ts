import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="country-list-heading">
      country-list works!
    </h2>
  `,
  styles: [
    `
    .country-list-heading {
      font-size: 24px;
      color: #0099ff;
    }
    `
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
