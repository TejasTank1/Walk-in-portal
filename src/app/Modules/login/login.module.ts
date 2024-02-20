import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincompComponent } from './logincomp/logincomp.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { MainComponent } from './Create_account/main/main.component';
import { PersonalInfoComponent } from './Create_account/personal-info/personal-info.component';
import { QualificationComponent } from './Create_account/qualification/qualification.component';
import { ReviewProcessComponent } from './Create_account/review-process/review-process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginserviceService } from './loginservice.service';



@NgModule({
  declarations: [
    MainComponent,
    LogincompComponent,
    LoginnavComponent,
    PersonalInfoComponent,
    QualificationComponent,
    ReviewProcessComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  providers:[
    LoginserviceService
  ]
})
export class LoginModule { }
