import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public getallowedjobroles()
  {
    return this.http.get("https://localhost:7210/getjobroles");
  }

  public getStream()
  {
    return this.http.get("https://localhost:7210/getstream");
  }

  public getCollege()
  {
    return this.http.get("https://localhost:7210/getcolleges");
  }

  public getQualification()
  {
    return this.http.get("https://localhost:7210/getqualification");
  }

  public getTechnology()
  {
    return this.http.get("https://localhost:7210/gettechnologies");
  }

}
