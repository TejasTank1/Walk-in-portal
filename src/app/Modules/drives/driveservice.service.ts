import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DriveserviceService {
   url="https://localhost:7210/";
   header!:HttpHeaders;

  constructor(private http:HttpClient) {
    let token=localStorage.getItem("Token");
   this.header = new HttpHeaders({
      Authorization: 'Bearer '+token
  });

   }

   //get requests for drive.

   public getalldrives()
   {
    return this.http.get(this.url+"getWalkindrives",{headers:this.header});
   }

   public getalljobroletable()
   {
    return this.http.get(this.url+"getalljobrolestable",{headers:this.header});
   }

   public getalljobroleofdrive(email:string)
   {
    return this.http.get(this.url+"getjobrolesidsbydriveid/"+email,{headers:this.header});
   }

   public getdrivebyid(driveid:any)
   {
    return this.http.get(this.url+"getWalkindrivebyid/"+driveid,{headers:this.header});
   }

   public getperrequisitebyid(preid:any)
   {
    return this.http.get(this.url+"getPrerequisite/"+preid,{headers:this.header});
   }

   public gettimeslotsofdrive(driveid:any)
   {
    return this.http.get(this.url+"getdrivesavailabletime/"+driveid,{headers:this.header});
   }

   public getalltimeslots()
   {
    return this.http.get(this.url+"getSlots",{headers:this.header});
   }

   public getroundsofdrivebydriveid(driveid:any)
   {
    return this.http.get(this.url+"getroundsbyid/"+driveid,{headers:this.header});
   }

   public gettimeslotbyid(slotid:any)
   {
      return this.http.get(this.url+"gettimeslotbyid/"+slotid,{headers:this.header});
   }

   //post requests for drive.

   public applydrive(obj:any)
   {
    return this.http.post(this.url+"drive/driveapplied/Add",obj,{headers:this.header});
   }

   public applieddrivejobroles(obj:any)
   {
    return this.http.post(this.url+"drive/driveappliedjobroles/Add",obj,{headers:this.header});
   }
}
