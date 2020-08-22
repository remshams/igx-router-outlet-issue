import { Component } from '@angular/core';
import { LoginService } from './_common/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'igx-reload-issue';

  constructor(public loginService: LoginService) {}
}
