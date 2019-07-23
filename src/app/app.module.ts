import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddTrackerComponent } from './odd-tracker/odd-tracker.component';
import { EvenTrackerComponent } from './even-tracker/even-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddTrackerComponent,
    EvenTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
