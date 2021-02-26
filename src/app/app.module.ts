import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkareaComponent } from './components/workarea/workarea.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
