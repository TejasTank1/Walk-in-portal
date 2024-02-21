import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DriveserviceService {
   url="https://localhost:7210/";
  constructor(private http:HttpClient) {

   }

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

}
