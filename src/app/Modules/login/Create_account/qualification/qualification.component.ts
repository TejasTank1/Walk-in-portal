import { Component, Input, SimpleChange, input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginserviceService } from '../../loginservice.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.scss'
})
export class QualificationComponent {
  @Input() qualificationinfo?:FormGroup;
  @Input() profesqualificainfo?:FormGroup;

  qualidrop:boolean=false;
  profdrop:boolean=false;
  streams:any;
  colleges:any;
  qualifications:any;
  technologies:any;
  public constructor(private http:LoginserviceService)
  {}


    ngOnInit()
    {
      this.http.getStream().subscribe((res)=>{
        this.streams=res;
        console.log(res);
      });

      this.http.getCollege().subscribe((res)=>{
        this.colleges=res;
      })

      this.http.getQualification().subscribe((res)=>{
        this.qualifications=res;
      })

      this.http.getTechnology().subscribe((res)=>{
        this.technologies=res;
      })

      // this.profesqualificainfo?.controls["applicant_type"].setValue("as");
      // console.log(this.profesqualificainfo?.value)

    }

    togglequal()
    {
      this.qualidrop=!this.qualidrop;
    }
    toggleprofes()
    {
      this.profdrop=!this.profdrop;
    }

    familierexperttechnology(e:any,typeoftech:string,techid:Number)
    {
      const technology = this.profesqualificainfo?.get(typeoftech);

      if (e.target.checked) {
        technology?.value.push(techid);
      } else {
        let idx=technology?.value.findIndex((ele: any) => ele ===techid);
        technology?.value.splice(idx,1);
      }
    }

}
