import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from './radio/radio.component';

const routes: Routes = [
  {
    path:"radio",
    component:RadioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule { }
