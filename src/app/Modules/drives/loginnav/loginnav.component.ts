import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginnav',
  templateUrl: './loginnav.component.html',
  styleUrl: './Sass/style.scss'
})
export class LoginnavComponent {
   constructor(private router:Router)
   {

   }
   logout(){
    localStorage.removeItem("Id");
    localStorage.removeItem("Token");
    this.router.navigateByUrl("/login");
   }
}
