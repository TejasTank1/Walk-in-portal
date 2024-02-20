
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginserviceService } from '../../loginservice.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
   @Input() personalinfo!:FormGroup;
   referredjobroles!:any;


   constructor(private Logser:LoginserviceService){
   }

   ngOnInit()
   {
    this.Logser.getallowedjobroles().subscribe((res:any)=>{
      this.referredjobroles=res;
    })
   }

   changecheck(e:any,roleid:any)
   {
    const jobroles = this.personalinfo.get('Prefered_Job_roles');

    if (e.target.checked) {
      jobroles?.value.push((roleid));
    } else {
      let idx=jobroles?.value.findIndex((ele: any) => ele ===roleid);
      jobroles?.value.splice(idx,1);
      console.log(jobroles?.value);
    }

   }
}
