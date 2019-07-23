import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  clock
  time: number = 0
  running: boolean = false
  @Output() timeEmitter = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (!this.running) {
      this.running = true
      this.time = 0
      this.clock = setInterval(
        () => {
          this.time = this.time + 1; console.log(this.time); this.timeEmitter.emit(this.time) 
      } ,
        500)
    }
    else {
      console.log("Already Running!")
    }
  }

  onStop() {
    clearInterval(this.clock)
    this.running = false
  }

  incrementTime() {
    this.time = this.time + 1
    console.log(this.time)
  }

}
