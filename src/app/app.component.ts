import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basic Of TypeScript For Angular';

  data: { name: string; phoneNumber: number } = { name: '', phoneNumber: 0 }; // typescript object declaration

  item: string[] = ['item1', 'item2', 'item3']; // typescript array declaration

  getData(data: { name: string; phoneNumber: number }) {
    console.log(data);
  } // typescript function declaration
}
