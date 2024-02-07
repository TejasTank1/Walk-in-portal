import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDrivesComponent } from './all-drives/all-drives.component';
import { DriveComponent } from './drive/drive.component';
import { AppliedroleComponent } from './appliedrole/appliedrole.component';

const routes: Routes = [{path:'drives',component:AllDrivesComponent},{path:'drives/:driveid',component:DriveComponent},{path:'applied/:driveid',component:AppliedroleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DrivesRoutingModule { }
