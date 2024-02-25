import { Component } from '@angular/core';
import { DriveserviceService } from '../driveservice.service';
import { JwtauthService } from '../../../Services/jwtauth.service';

@Component({
  selector: 'app-all-drives',
  templateUrl: './all-drives.component.html',
  styleUrl: './all-drives.component.scss'
})
export class AllDrivesComponent {
   drives!:any;
   jobroleobject!:Map<any,any>;
   jobroleIdtoname!:Map<any,any>;
   constructor(private driveser:DriveserviceService,private jwtauthser:JwtauthService){}
  ngOnInit()
  {
    let payload=this.jwtauthser.jwtpayload;
    alert(JSON.stringify(payload));
    this.jobroleobject=new Map();
    this.jobroleIdtoname=new Map();
    this.driveser.getalljobroletable().subscribe((alljobroles:any)=>{

      alljobroles.forEach((jobrole:any) => {
        this.jobroleIdtoname.set(jobrole.roleId,jobrole);
        console.log(jobrole);
      });

    this.driveser.getalldrives().subscribe((drives:any)=>{
      console.log(drives);
      this.drives=drives;
      drives.forEach((ele:any) => {
        this.driveser.getalljobroleofdrive(ele.driveId).subscribe((ok:any)=>{
          this.jobroleobject.set(ele.driveId,ok);
          console.log(ok);
        });
      });
    })
  })
  }
}
