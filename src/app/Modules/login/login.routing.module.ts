import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincompComponent } from './logincomp/logincomp.component';
import { MainComponent } from './Create_account/main/main.component';
import { forloginauthGuard } from '../../Guards/forloginauth.guard';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LogincompComponent,canActivate:[forloginauthGuard]},
  {path:'createaccount',component:MainComponent,canActivate:[forloginauthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
