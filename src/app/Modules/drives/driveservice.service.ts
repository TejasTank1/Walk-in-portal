import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DriveserviceService {
   url="https://localhost:7210/";
  constructor(private http:HttpClient) {

   }

   //get requests for drive.

   public getalldrives()
   {
    return this.http.get(this.url+"getWalkindrives");
   }

   public getalljobroletable()
   {
    return this.http.get(this.url+"getalljobrolestable");
   }

   public getalljobroleofdrive(email:string)
   {
    return this.http.get(this.url+"getjobrolesidsbydriveid/"+email);
   }

   public getdrivebyid(driveid:any)
   {
    return this.http.get(this.url+"getWalkindrivebyid/"+driveid);
   }

   public getperrequisitebyid(preid:any)
   {
    return this.http.get(this.url+"getPrerequisite/"+preid);
   }

   public gettimeslotsofdrive(driveid:any)
   {
    return this.http.get(this.url+"getdrivesavailabletime/"+driveid);
   }

   public getalltimeslots()
   {
    return this.http.get(this.url+"getSlots");
   }

   public getroundsofdrivebydriveid(driveid:any)
   {
    return this.http.get(this.url+"getroundsbyid/"+driveid);
   }

   //post requests for drive.

   public applydrive(obj:any)
   {
    return this.http.post(this.url+"drive/driveapplied/Add",obj);
   }

   public applieddrivejobroles(obj:any)
   {
    return this.http.post(this.url+"drive/driveappliedjobroles/Add",obj);
   }
}
