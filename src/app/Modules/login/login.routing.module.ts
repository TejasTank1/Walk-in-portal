import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincompComponent } from './logincomp/logincomp.component';
import { MainComponent } from './Create_account/main/main.component';

const routes: Routes = [
  {path:'login',component:LogincompComponent},
  {path:'createaccount',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
