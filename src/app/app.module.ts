import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseInterceptor } from './http-req-res-interceptor.interceptor';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    provideAnimationsAsync(),
    { 
      provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
