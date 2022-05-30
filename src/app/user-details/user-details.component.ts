import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() item: {
    name: string;
    age: number;
    address: string;
    city: string;
    state: string;
    zip: number;
  } = { name: '', age: 0, address: '', city: '', state: '', zip: 0 };

  constructor() {}

  ngOnInit(): void {}
}
