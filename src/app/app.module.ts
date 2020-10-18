import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MortageSummaryComponent } from './components/mortage-summary/mortage-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MortageSummaryComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }