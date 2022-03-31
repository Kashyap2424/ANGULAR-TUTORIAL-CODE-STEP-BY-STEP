import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
