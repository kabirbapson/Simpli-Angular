import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsGroupComponent } from './forms-group/forms-group.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'form', component:FormsGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
