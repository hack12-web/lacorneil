import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { MenComponent } from './components/men/men.component';

const routes: Routes = [
  {
    path:"",
    component: BodyComponent
  },
  {
    path:"men",
    component: MenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
