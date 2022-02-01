import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { MusicModule } from './music/music.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistModule } from './playlist/playlist.module';
import { RadioModule } from './radio/radio.module';
import { PrivacyModule } from './privacy/privacy.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ContactModule,
    HomeModule,
    MusicModule,
    PlaylistModule,
    RadioModule,
    UserModule,
    PrivacyModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
