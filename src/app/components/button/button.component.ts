import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="btn">{{name}}</button>`,
  styles: ['.btn{background:#FC3B56; padding: 12px 40px; font-size: 18px; color: white; border: none; border-radius:8px;}']
})
export class ButtonComponent{

  @Input()
  name:string;
  
  constructor() { }

}
