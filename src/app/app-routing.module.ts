import { Type2Component } from './type2/type2.component';
import { Type1Component } from './type1/type1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'type1',
    component: Type1Component
  },
  {
    path: 'type2',
    component: Type2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
