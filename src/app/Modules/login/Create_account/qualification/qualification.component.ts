import { Component, Input, SimpleChange, input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

    ngOnInit()
    {
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

}
