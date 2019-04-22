import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhatYouCanDoComponent } from './what-you-can-do/what-you-can-do.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'WhatYouCanDo', component: WhatYouCanDoComponent },
  { path: 'MediaResources', component: MediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
