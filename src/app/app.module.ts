import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardComponent } from './component/passenger-dashboard/passenger-dashboard.component';
import { PassenjerService } from './services/passenjer.service';
import { PassCountComponent } from './component/pass-count/pass-count.component';
import { PassCardComponent } from './component/pass-card/pass-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PassenjerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
