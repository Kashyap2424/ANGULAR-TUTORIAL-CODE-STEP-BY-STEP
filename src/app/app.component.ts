import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODO Application with angular';

  list: any[] = [];

  addTodo(item: string) {
    this.list.push({ id: this.list.length + 1, name: item });
    console.log(item, this.list);
  }

  removeAddedTodo(id: any) {
    this.list = this.list.filter((todo) => todo.id !== id);
  }
}
