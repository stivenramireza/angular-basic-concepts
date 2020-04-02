import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concepts1';

  public myName:string = 'Stiven';

  onSayHello(message) {
    console.log(message);
  }
}
