import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ButtonComponent } from './components/button/button.component';
import { ErrorMessageHandler } from './helpers/error-handler';
import { ApiService } from './services/shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService, ErrorMessageHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
