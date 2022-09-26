import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path : '',
  component: HomepageComponent
 },
 {
  path:'video/:id',
  loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
