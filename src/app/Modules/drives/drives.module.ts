import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDrivesComponent } from './all-drives/all-drives.component';
import { DrivesRoutingModule } from './drives.routing.module';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { DriveComponent } from './drive/drive.component';
import { AppliedroleComponent } from './appliedrole/appliedrole.component';
import {  HttpClientModule } from '@angular/common/http';
import { DriveserviceService } from './driveservice.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllDrivesComponent,
    LoginnavComponent,
    DriveComponent,
    AppliedroleComponent
  ],
  imports: [
    CommonModule,
    DrivesRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[DriveserviceService]
})
export class DrivesModule { }
