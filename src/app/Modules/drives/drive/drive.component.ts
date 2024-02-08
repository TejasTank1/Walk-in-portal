import { Component } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss'
})
export class DriveComponent {

  prereq:boolean=false;
  jobrolesdrop:boolean[];

  constructor(){
    this.jobrolesdrop=[false];
  }

  toggleprereq(){
    this.prereq=!this.prereq;
  }

  toggleatindexforjobroles(i:number)
  {
    this.jobrolesdrop[i]=!this.jobrolesdrop[i];
  }


}
