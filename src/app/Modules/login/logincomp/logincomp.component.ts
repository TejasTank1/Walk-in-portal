import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';
import { LoginserviceService } from '../loginservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtauthService } from '../../../Services/jwtauth.service';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrl: './Sass/style.scss'
})
export class LogincompComponent {
   form!:FormGroup;
   constructor(private formBuilder: FormBuilder,private http:LoginserviceService,private router:Router,private jwtauthser:JwtauthService)
   {
    var islogin=localStorage.getItem("Id");
    if(islogin!=null)
    {
      this.router.navigateByUrl('drives');
    }
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
      // this.http.getidofluser(objtosend).subscribe((ok:any)=>{
      //   console.log(ok);
      //   localStorage.setItem("Id",ok);

        const sendtogettoken= {
          email: ele.Email,
          password:ele.Password,
          twoFactorCode: "efdffd",
          twoFactorRecoveryCode: "efdffd"
        }
        this.http.Logingettoken(sendtogettoken).subscribe((token:any)=>{
          alert(JSON.stringify(token));
          localStorage.setItem("Token",token.token);
          this.jwtauthser.dologin();
          this.router.navigateByUrl("/drives");
        })
 
    }
}
