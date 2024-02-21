import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginserviceService } from '../../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  personalinfo?:FormGroup;
  eduqualificationinfo?:FormGroup;
  profesqualificainfo?:FormGroup;
  currenttab!:any;

  constructor(private logser:LoginserviceService,private router:Router)
  {
    var islogin=localStorage.getItem("Id");
    if(islogin!= null)
    {
      this.router.navigateByUrl("drives");
    }
    this.currenttab=1;
    this.eduqualificationinfo=new FormGroup({
      Aggrigate_per:new FormControl(""),
      yearpass:new FormControl(2023),
      qualification:new FormControl(""),
      stream:new FormControl(""),
      college:new FormControl(""),
      otherclg:new FormControl(""),
      clglocation:new FormControl("")
    });

    this.profesqualificainfo=new FormGroup({
      applicant_type:new FormControl(""),
      year_of_exp:new FormControl(),
      currctc:new FormControl(),
      expectctc:new FormControl(),
      tech_femilier:new FormControl([]),
      tech_expert:new FormControl([]),
      isnotice:new FormControl(),
      end_of_notice:new FormControl(),
      long_notice:new FormControl(""),
      apperiedin12mo:new FormControl(),
      role_of_application:new FormControl()
    })

    this.personalinfo=new FormGroup({
      fname:new FormControl(""),
      lname:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      Phoneno:new FormControl(""),
      Resume_url:new FormControl("url"),
      Portfolio_url:new FormControl("url"),
      Prefered_Job_roles:new FormControl([]),
      Reffred_emp:new FormControl(""),
      Sendjobnotification:new FormControl(false)
    })

  }
  increment()
  {
    this.currenttab++;
  }
  decrement()
  {
    this.currenttab--;
  }
  Register()
  {
    let personal=this.personalinfo?.value;
    let edu=this.eduqualificationinfo?.value;
    let prof=this.profesqualificainfo?.value;

    var userreg={
      Email : personal.Email,
      Password:personal.Password
    }

    var personaldb={
      FirstName:personal.fname,
      LastName:personal.lname,
      PhoneNo:personal.Phoneno,
      Resume:personal.Resume_url,
      DisplayPicture:personal.Portfolio_url,
      PortfolioUrl:personal.Prefered_Job_roles,
      RefferedEmployeeName:personal.Reffred_emp,
      SendJobUpdate:personal.Sendjobnotification
    }

    this.logser.Userregadd(userreg).subscribe((id)=>{
      var personaldb={
        FirstName:personal.fname,
        LastName:personal.lname,
        PhoneNo:personal.Phoneno.toString(),
        Resume:personal.Resume_url,
        DisplayPicture:personal.Portfolio_url,
        PortfolioUrl:personal.Portfolio_url,
        RefferedEmployeeName:personal.Reffred_emp,
        SendJobUpdate:personal.Sendjobnotification==true ? 1 : 0,
        Id:id
      }
      var eduinfodb={
        Percentage:edu.Aggrigate_per,
        PassingYear:parseInt(edu.yearpass),
        Id:id,
        Collegeid:parseInt(edu.college),
        Streamid:parseInt(edu.stream),
        QualificationId:parseInt(edu.qualification)
      }
      var profinfodb={
        YearsOfExperience:prof.year_of_exp,
        CurrentCtc:prof.currctc,
        ExpectedCtc:prof.expectctc,
        NoticePeriod:prof.isnotice==true?1:0,
        NoticePeriodDuration:prof.long_notice,
        AppliedPrevious12Months:prof.apperiedin12mo==true?1:0,
        RoleForApplied:prof.role_of_application,
        ApplicantType:prof.applicant_type,
        Id:id
      }


      this.logser.Addpersonaldetail(personaldb).subscribe((ok)=>{
        console.log("Personal");
        this.logser.Addeducationdetail(eduinfodb).subscribe((ok)=>{
          console.log("Education");
          this.logser.Addprofesionaldetail(profinfodb).subscribe((ok)=>{
            console.log("Profesional");
            prof.tech_femilier.forEach((ele:any)=>{
              let objtosend={
                Id:id,
                Tech_id:ele
              }
              this.logser.Addintofamiliertechjunction(objtosend).subscribe((ok)=>{
                console.log("done fam");

              })
            })

            prof.tech_expert.forEach((ele:any)=>{
              let objtosend={
                Id:id,
                Tech_id:ele
              }
              this.logser.Addintoexperttechjunction(objtosend).subscribe((ok)=>{
                console.log("done exp");
                this.router.navigateByUrl("/login");
              })
            })

          });
        });
      });

    })


  }
}
