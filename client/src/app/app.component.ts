import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'My Angular App';
  public isAuthenticated: boolean;

  constructor() { }

  async ngOnInit() {
    this.isAuthenticated = true
  }

  login() {
  }

  logout() {
  }
}
