import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DriveserviceService } from '../driveservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss'
})
export class DriveComponent {

  prereq:boolean=false;
  jobrolesdrop:boolean[];

  //all drive information variables.
  drive!:any;
  jobroleidtoobjectmapper!:Map<any,any>;
  slotsidtonamemapper!:Map<any,any>;
  jobrolesidofthisdrive:any[]=[];
  availableslotsidofthisdrive:any[]=[];
  allroundsofthisdrive:any[]=[];
  prerequisiteofthisdrive:any;

  applieddriveform!:FormGroup;

  constructor(private route: ActivatedRoute,private driveser:DriveserviceService){
    this.jobrolesdrop=[];
    this.jobroleidtoobjectmapper=new Map<any,any>();
    this.slotsidtonamemapper=new Map<any,any>();

    this.applieddriveform=new FormGroup({
      Resume:new FormControl("url"),
      slotid:new FormControl(),
      jobrolesid:new FormControl([])
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
    if(e.target.checked)
    {
      let idx=this.applieddriveform.value.jobrolesid.findIndex(jobid);
    //   this.applieddriveform.value.jobrolesid.slice(idx,1);
    }else{
    //   this.applieddriveform.value.jobrolesid.push(jobid);
    }
  }


}
