import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Reactive Form';

  loginForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    console.warn(this.loginForm.value);
  }
}
