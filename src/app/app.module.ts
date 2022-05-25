import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbarComponent } from './components/nbar/nbar.component';
import { FootherComponent } from './components/foother/foother.component';

@NgModule({
  declarations: [
    AppComponent,
    NbarComponent,
    FootherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
