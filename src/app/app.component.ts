import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Create Counter';
  data = 'New Data is here!';

  counterValue = 0;

  counterFuncation(parameter: string) {
    if (parameter === 'increment') {
      this.counterValue++;
    } else {
      this.counterValue--;
    }
  }
}
