import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login:string = 'Login';
  write:string = 'Write us';
  send: string = "Send";

  passion:string = "Our Passion";
  writeus:string = "Write Us";
  trusted:string = "Trusted Us";
}
