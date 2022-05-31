import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberDataService {
  constructor() {}

  
  members() {
    return [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane@gmail.com ',
      },
      {
        name: 'Sam Smith',
        email: 'sam@gmail.com',
      },
      {
        name: 'Tom Smith',
        email: 'tom@gmail.com',
      },
    ];
  }
}
