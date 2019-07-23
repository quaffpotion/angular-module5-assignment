import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mylist: number[] = []

  onTimeEmitted(event: number) {
    this.mylist.push(event)
  }
}
