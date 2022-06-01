import { Injectable } from '@angular/core';
import userModeldataType from '../model/user-model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getData() {
    const data: userModeldataType = {
      id: 1,
      name: 'Manish',
      indian: true,
      address: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
    }; // dataType interface

    return data;
  }
}
