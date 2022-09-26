import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchdataComponent } from './searchdata/searchdata.component';

const routes: Routes = [
  { path : '',
  component: SearchdataComponent
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
export class SearchRoutingModule { }
