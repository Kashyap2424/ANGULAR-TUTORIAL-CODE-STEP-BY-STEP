import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  componentName = 'users';

  ngOnInit(): void {}

  sum(value1: number, value2: number) {
    return value1 + value2;
  }
}
