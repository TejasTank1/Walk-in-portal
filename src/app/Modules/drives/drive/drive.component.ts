import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DriveserviceService } from '../driveservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss'
})
export class DriveComponent {

  prereq:boolean=false;
  jobrolesdrop:boolean[];
  idofuser:any;

  applydisabled=false;

  //all drive information variables.
  drive!:any;
  jobroleidtoobjectmapper!:Map<any,any>;
  slotsidtonamemapper!:Map<any,any>;
  jobrolesidofthisdrive:any[]=[];
  availableslotsidofthisdrive:any[]=[];
  allroundsofthisdrive:any[]=[];
  prerequisiteofthisdrive:any;

  applieddriveform!:FormGroup;

  constructor(private route: ActivatedRoute,private driveser:DriveserviceService,private routefornav:Router){

    this.idofuser=localStorage.getItem("Id");
    if(this.idofuser==null)
    {
      this.applydisabled=true;
    }
    this.jobrolesdrop=[];
    this.jobroleidtoobjectmapper=new Map<any,any>();
    this.slotsidtonamemapper=new Map<any,any>();

    this.applieddriveform=new FormGroup({
      Resume:new FormControl("url"),
      slotid:new FormControl(),
      jobrolesid:new FormControl([]),
      file:new FormControl()
    })
  }

  ngOnInit()
  {
    //getting id from router parameter.
    let id=this.route.snapshot.paramMap?.get("driveid");

    //getting drive by id.
    this.driveser.getdrivebyid(id).subscribe((drivefromdb)=>{
      this.drive=drivefromdb;
          //getting prerequisite of this drive.
    this.driveser.getperrequisitebyid(this.drive.preid).subscribe((prereqobj:any)=>{
      this.prerequisiteofthisdrive=prereqobj;
    })
    })

    //getting all jobs and mapping them with their id's.
    this.driveser.getalljobroletable().subscribe((alljobroles:any)=>{
      alljobroles.forEach((job:any) => {
        if(this.jobroleidtoobjectmapper==undefined)
        this.jobroleidtoobjectmapper=new Map<any,any>();

        this.jobroleidtoobjectmapper.set(job.roleId,job);
      });
    })

    if(id!=null){
      //getting all job roles's id's of this drive.
    this.driveser.getalljobroleofdrive(id).subscribe((jobroles:any)=>{
        jobroles.forEach((element:any) => {
          this.jobrolesidofthisdrive.push(element.role_id);
          this.jobrolesdrop.push(false);
        });
    });
    }



    //getting all time slots and mapping id to name.
    this.driveser.getalltimeslots().subscribe((slots:any)=>{
      slots.forEach((slot:any) => {

        if(this.slotsidtonamemapper==undefined)
          this.slotsidtonamemapper=new Map<any,any>();

        this.slotsidtonamemapper.set(slot.id,slot.slotName);

      });
    })


    //getting available time slot of this drive
    this.driveser.gettimeslotsofdrive(id).subscribe((allslots:any)=>{
      allslots.forEach((slot:any) => {
        this.availableslotsidofthisdrive.push(slot.slotsId);
      });
    })

    //getting all rounds of this drive
    this.driveser.getroundsofdrivebydriveid(id).subscribe((allround:any)=>{
      this.allroundsofthisdrive=allround;
    })

  }

  toggleprereq(){
    this.prereq=!this.prereq;
  }

  toggleatindexforjobroles(i:number)
  {
    this.jobrolesdrop[i]=!this.jobrolesdrop[i];
  }

  changeslot(slotid:any)
  {
    this.applieddriveform.value.slotid=slotid;
  }

  addintojob(e:any,jobid:any)
  {
    if(!e.target.checked)
    {
      let idx=this.applieddriveform.value.jobrolesid.findIndex((n:any)=>n==jobid);
      this.applieddriveform.value.jobrolesid.splice(idx,1);
    }else{
      this.applieddriveform.value.jobrolesid.push(jobid);
    }
  }

  Applytothejob()
  {
    if(this.idofuser==null)
    {
      this.routefornav.navigateByUrl("/login");
    }
    else{
    let applied=this.applieddriveform.value;
    let cdate=new Date().toJSON().slice(0, 10);

    let drivetosend={
      Resume:applied.Resume,
      Id:parseInt(this.idofuser),
      SlotsId:applied.slotid,
      DriveId:this.drive.driveId,
      DtCreated:cdate,
      DtUpdated:cdate
    }

    this.driveser.applydrive(drivetosend).subscribe((ok)=>{
      applied.jobrolesid.forEach((ele:any) => {
        let appliedhasjobrole={
          Id:parseInt(this.idofuser),
          Drive_id:this.drive.driveId,
          Slots_id:applied.slotid,
          Role_id:ele
        }
        alert("applied");
        this.driveser.applieddrivejobroles(appliedhasjobrole).subscribe((ok)=>{
          this.routefornav.navigateByUrl("drives/"+this.drive.driveId+"/applied/"+applied.slotid);
        },(error)=>{
          alert(JSON.stringify(error))
        })
      });
    },(error)=>{
      alert(JSON.stringify(error))
    })
  }
}



}
