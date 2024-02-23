import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDrivesComponent } from './all-drives/all-drives.component';
import { DriveComponent } from './drive/drive.component';
import { AppliedroleComponent } from './appliedrole/appliedrole.component';
import { authGuard } from '../../Guards/auth.guard';

const routes: Routes = [ {path:'drives',component:AllDrivesComponent,pathMatch:"full",canActivate:[authGuard]},{path:'drives/:driveid',component:DriveComponent,pathMatch:"full",canActivate:[authGuard]},{path:'drives/:driveid/applied/:slotid',component:AppliedroleComponent,canActivate:[authGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DrivesRoutingModule { }
