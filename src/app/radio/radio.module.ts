import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio/radio.component';
import { RadioS1Component } from './radio-s1/radio-s1.component';
import { RadioS2Component } from './radio-s2/radio-s2.component';
import { RadioS3Component } from './radio-s3/radio-s3.component';


@NgModule({
  declarations: [
    RadioComponent,
    RadioS1Component,
    RadioS2Component,
    RadioS3Component
  ],
  imports: [
    CommonModule,
    RadioRoutingModule
  ]
})
export class RadioModule { }
