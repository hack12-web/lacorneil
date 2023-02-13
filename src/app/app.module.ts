import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBarComponent } from './components/header/header-bar/header-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';
import { BodySlideComponent } from './components/body/body-slide/body-slide.component';
import { BodyOneComponent } from './components/body/body-one/body-one.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { MenComponent } from './components/men/men.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBarComponent,
    BodyComponent,
    BodySlideComponent,
    BodyOneComponent,
    FooterComponent,
    MenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
