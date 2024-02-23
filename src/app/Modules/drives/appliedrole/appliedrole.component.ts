import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriveserviceService } from '../driveservice.service';

@Component({
  selector: 'app-appliedrole',
  templateUrl: './appliedrole.component.html',
  styleUrl: './appliedrole.component.scss'
})
export class AppliedroleComponent {

    userid:any;
    driveid:any;
    slotid:any;
    drivename:any;
    drivedate:any;
    slotname:any;

    //currently i am fetching data that only need to display in future if any extra information needed for hall ticket we will fetch that from database.

    constructor(public route:ActivatedRoute,private driveser:DriveserviceService){}

    ngOnInit()
    {
      this.userid=localStorage.getItem("Id");
      this.driveid=this.route.snapshot.paramMap.get("driveid");
      this.slotid=this.route.snapshot.paramMap.get("slotid");
      console.log(this.slotid)

      this.slotid=parseInt(this.slotid);
      this.driveser.getdrivebyid(this.driveid).subscribe((drive:any)=>{
        console.log(drive);
        this.drivename=drive.driveName;
        this.drivedate=drive.driveStartDate;
        console.log(this.drivename);
        console.log(this.drivedate);
      })

      this.driveser.gettimeslotbyid(this.slotid).subscribe((name:any)=>{
        this.slotname=name.slotName;
        console.log(this.slotname);
      })


    }
}

