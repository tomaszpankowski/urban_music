import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { MusicS1Component } from './music-s1/music-s1.component';
import { MusicS2Component } from './music-s2/music-s2.component';
import { MusicS3Component } from './music-s3/music-s3.component';


@NgModule({
  declarations: [
    MusicComponent,
    MusicS1Component,
    MusicS2Component,
    MusicS3Component
  ],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
