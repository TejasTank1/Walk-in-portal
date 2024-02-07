import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDrivesComponent } from './all-drives/all-drives.component';
import { DrivesRoutingModule } from './drives.routing.module';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { DriveComponent } from './drive/drive.component';
import { AppliedroleComponent } from './appliedrole/appliedrole.component';


@NgModule({
  declarations: [
    AllDrivesComponent,
    LoginnavComponent,
    DriveComponent,
    AppliedroleComponent
  ],
  imports: [
    CommonModule,
    DrivesRoutingModule
  ]
})
export class DrivesModule { }
