import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class JwtauthService {
  jwtpayload:any;
  constructor() {

  }

  decodejwt()
  {
    var token=localStorage.getItem("Token");
    if(token!=null)
    return jwt_decode.jwtDecode(token);
    else
    return {}
  }

  dologin(){
    this.jwtpayload=this.decodejwt();
    localStorage.setItem("Id",this.jwtpayload.unique_name);
  }
}
