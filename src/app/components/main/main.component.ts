import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  send: string = "Wyślij";

  passion: string = "Our passion";
  write: string = "Write us";
  trusted: string = "Trusted Us";
  
  constructor() { }
}
 