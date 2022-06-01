import { Component, enableProdMode } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Call API In Angular';

  users: any = [{}];

  constructor(private userData: UserDataService) {
    userData.users().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
