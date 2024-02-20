import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor()
  {
    this.currenttab=3;
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
      Id : personal.Email,
    }
  }
}
