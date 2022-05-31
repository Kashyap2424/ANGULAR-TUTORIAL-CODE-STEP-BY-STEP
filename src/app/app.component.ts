import { Component, enableProdMode } from '@angular/core';
import { MemberDataService } from './services/member-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular What We Services';

  memberData: any;

  constructor(private memberDataService: MemberDataService) {
    console.log(memberDataService.members());

    this.memberData = memberDataService.members();
  }
}
