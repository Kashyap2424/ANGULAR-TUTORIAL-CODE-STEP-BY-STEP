import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send Data Child Components To Parent Component';

  // This is the funcation that we are sending to the child component
  updateData(data: string) {
    alert(data);
  }
}
