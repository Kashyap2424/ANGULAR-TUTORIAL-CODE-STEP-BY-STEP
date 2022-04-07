import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Getting Value Form Input Box';
  data = 'New Data is here!';

  inputData = '';

  getInputData(data: string) {
    this.inputData = data;
  }
}
