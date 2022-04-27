import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistS1Component } from './playlist-s1/playlist-s1.component';
import { PlaylistS2Component } from './playlist-s2/playlist-s2.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistS1Component,
    PlaylistS2Component
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
