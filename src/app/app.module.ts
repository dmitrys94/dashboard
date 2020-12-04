import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LandingPageModule } from './layouts/landing-page/landing-page.module';
import { PageContentModule } from './layouts/page-content/page-content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    LandingPageModule,
    PageContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
