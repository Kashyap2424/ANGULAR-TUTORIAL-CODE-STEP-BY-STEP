import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Style Binding';

  color = 'red';
  backgroundColor = 'yellow';

  changeColor() {
    this.color = this.color === 'red' ? 'white' : 'red';

    this.backgroundColor =
      this.backgroundColor === 'yellow' ? 'black' : 'yellow';
  }
}
