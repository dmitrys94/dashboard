import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  users: Users[] = [];
}

export class Users {
  firstname: String;
  lastname: String;
  username: String;
  password: String;
}
