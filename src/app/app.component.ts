import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'First-Application';
  data = 'New Data is here!';

  getFuncation(name: string) {
    alert(`This is clicked from: ${name}`);
  }

  number = 100;

  getData(data: string) {
    console.warn(`Funcation Called & Got value from user: ${data}`);
  }
}
