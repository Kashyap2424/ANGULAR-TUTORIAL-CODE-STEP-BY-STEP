import { Component } from '@angular/core';
import userModeldataType from './model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Model & Interface';
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
