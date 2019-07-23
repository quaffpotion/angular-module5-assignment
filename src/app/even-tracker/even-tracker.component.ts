import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-tracker',
  templateUrl: './even-tracker.component.html',
  styleUrls: ['./even-tracker.component.css']
})
export class EvenTrackerComponent implements OnInit {

  @Input() value: number

  constructor() { }

  ngOnInit() {
  }

}
