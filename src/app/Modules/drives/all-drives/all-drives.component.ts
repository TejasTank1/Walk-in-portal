import { Component } from '@angular/core';

@Component({
  selector: 'app-all-drives',
  templateUrl: './all-drives.component.html',
  styleUrl: './all-drives.component.scss'
})
export class AllDrivesComponent {
   drives:any[]=[{name:"Walk In for Designer Job Role",startdate:"10-Jul-2021",enddate:"11-Jul-2021",location:"Mumbai",jobroles:["Instructional Designer","Software Engineer","Software Quality Engineer"]},
   {name:"Walk In for Designer Job Role",startdate:"10-Jul-2021",enddate:"11-Jul-2021",location:"Mumbai",jobroles:["Instructional Designer","Software Engineer","Software Quality Engineer"],extrainfo:"Internship Opportunity for MCA Students"},
   {name:"Walk In for Designer Job Role",startdate:"10-Jul-2021",enddate:"11-Jul-2021",location:"Mumbai",jobroles:["Instructional Designer","Software Engineer","Software Quality Engineer"]}]
}
