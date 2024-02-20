import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrl: './Sass/style.scss'
})
export class LogincompComponent {
   form!:FormGroup;
   constructor(private formBuilder: FormBuilder,private http:HttpClient)
   {

    this.form=formBuilder.group(
      {
        Email:new FormControl(""),
        Password:new FormControl(""),
        Check:new FormControl(false)
      }
    )
   }


   login()
   {
      const ele=this.form.value;
      const objtosend={
        Email:ele.Email,
        Password:ele.Password
      }
    }
}
