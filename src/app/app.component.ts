import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Passing data to a child component';

  childComponentTitle = 'This is the title from the child component';

  childComponentTitleNext =
    'This is the title from the child component - Updated ! ⁄˚◡˚⁄';

  updateChildComponentData() {
    this.childComponentTitle = this.childComponentTitleNext;
  }
}
