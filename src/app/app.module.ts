import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkareaComponent } from './components/workarea/workarea.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SendSmsComponent } from './components/send-sms/send-sms.component';
import { NohistoryComponent } from './components/nohistory/nohistory.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkareaComponent,
    DashboardComponent,
    SendSmsComponent,
    NohistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DashboardComponent, SendSmsComponent, NohistoryComponent]
})
export class AppModule { }
