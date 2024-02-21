import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DriveserviceService } from '../driveservice.service';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss'
})
export class DriveComponent {

  prereq:boolean=false;
  jobrolesdrop:boolean[];
  drive!:any;
  jobroleidtonamemapper!:Map<any,any>;

  constructor(private route: ActivatedRoute,private driveser:DriveserviceService){
    this.jobrolesdrop=[false];
  }

  ngOnInit()
  {
    let id=this.route.snapshot.paramMap?.get("driveid");
    this.driveser.getdrivebyid(id).subscribe((drivefromdb)=>{
      this.drive=drivefromdb;
    })

    // this.driveser 
  }

  toggleprereq(){
    this.prereq=!this.prereq;
  }

  toggleatindexforjobroles(i:number)
  {
    this.jobrolesdrop[i]=!this.jobrolesdrop[i];
  }


}
