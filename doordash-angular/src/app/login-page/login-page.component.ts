import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor( private sessionService: SessionService ) {
  }

  user: string = null;

  login(): void {
    this.sessionService.login(this.user);
  }
}
