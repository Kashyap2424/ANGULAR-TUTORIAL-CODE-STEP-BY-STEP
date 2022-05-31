import { Component, OnInit } from '@angular/core';
import { MemberDataService } from '../services/member-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  memberData: any;

  constructor(private memberDataService: MemberDataService) {
    console.log(memberDataService.members());
    this.memberData = memberDataService.members();
  }

  ngOnInit(): void {}
}
