import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  header!:HttpHeaders;

  constructor(private http:HttpClient) {

  }

  // for login

  public getidofluser(obj:any)
  {
    return this.http.post("https://localhost:7210/getuserid",obj);
  }

  //for registring new user


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

  public Logingettoken(obj:any)
  {
    return this.http.post("https://localhost:7210/api/Login",obj);
  }

  public Userregadd(obj:any)
  {
    return this.http.post("https://localhost:7210/user/add",obj);
  }

  public Addpersonaldetail(obj:any)
  {
    console.log(obj);
    return this.http.post("https://localhost:7210/user/addpersonalinfo",obj);
  }

  public Addeducationdetail(obj:any)
  {
    return this.http.post("https://localhost:7210/user/addeduinfo",obj);
  }

  public Addprofesionaldetail(obj:any)
  {
    return this.http.post("https://localhost:7210/user/addprofesinfo",obj);
  }

  public Addintofamiliertechjunction(obj:any)
  {
    return this.http.post("https://localhost:7210/user/addprofesinfo/techfamilier",obj)
  }

  public Addintoexperttechjunction(obj:any)
  {
    return this.http.post("https://localhost:7210/user/addprofesinfo/techexpert",obj);
  }
}
