import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincompComponent } from './logincomp/logincomp.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginnavComponent } from './loginnav/loginnav.component';



@NgModule({
  declarations: [
    LogincompComponent,
    LoginnavComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
