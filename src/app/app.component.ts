import { Component, OnInit } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Call POST API In Angular';

  users: any = [{}];
  userData: any = [{}];

  constructor(private UserDataService: UserDataService) {
    this.userData = UserDataService.users();
  }
  ngOnInit(): void {
    this.userData.subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }
  getUserFormData(data: any) {
    this.UserDataService.saveUserInfo(data).subscribe((data: any) => {
      this.users = data;
    });
  }
}
