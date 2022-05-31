import { Component, enableProdMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular What We Services';

  memberData = [
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
