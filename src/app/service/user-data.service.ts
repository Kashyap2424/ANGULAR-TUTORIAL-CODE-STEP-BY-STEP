import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private httpURL: HttpClient) {}

  users() {
    return this.httpURL.get('https://jsonplaceholder.typicode.com/users');
  }
}
