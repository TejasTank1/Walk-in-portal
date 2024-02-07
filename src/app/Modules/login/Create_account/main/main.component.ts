import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  qualificationinfo?:FormGroup;
  profesqualificainfo?:FormGroup;

  constructor()
  {
    this.qualificationinfo=new FormGroup({
      Aggrigate_per:new FormControl(""),
      yearpass:new FormControl(2023),
      qualification:new FormControl(""),
      stream:new FormControl(""),
      college:new FormControl(""),
      otherclg:new FormControl(""),
      clgloca:new FormControl("")
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

    
  }
}
