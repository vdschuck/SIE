import { Component } from '@angular/core';

import { AuthGuardService } from "./services/auth_guard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authGuardService: AuthGuardService) { }

  isLogged(): boolean {
    return this.authGuardService.canActivate();
  }

}
