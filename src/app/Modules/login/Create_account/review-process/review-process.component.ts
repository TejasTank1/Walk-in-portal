import { Component, Input } from '@angular/core';
import { LoginserviceService } from '../../loginservice.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-process',
  templateUrl: './review-process.component.html',
  styleUrl: './review-process.component.scss'
})
export class ReviewProcessComponent {
  jobroles:any;
  alltechnology:any;

  jobrolestempmap:any;
  technologytempmap:any;
  //data comes from parent and we will add them to this page
  @Input() personalinfo!:FormGroup;
  @Input() qualificationinfo!:FormGroup;
  @Input() profesqualificainfo!:FormGroup;

  constructor(private apiservice:LoginserviceService){
    this.jobrolestempmap=new Object();
    this.technologytempmap=new Object();
  }

  ngOnInit()
  {
    this.apiservice.getallowedjobroles().subscribe((res)=>{
      this.jobroles=res;
      this.jobroles.forEach((ele:any) => {
        this.jobrolestempmap[ele.roleId]=ele.name;
      }); 
    })

    this.apiservice.getTechnology().subscribe((res)=>{
      this.alltechnology=res;
      this.alltechnology.forEach((ele:any) => {
        this.technologytempmap[ele.techId]=ele.techName;
      });
    })
  }
}
