import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title : string = 'pruebalibreriaangular';

  public counter : number =0;


  MyFuction() {
    this.title= `Nuevo titulo ${this.counter}`;
    this.counter++;
  }
}
