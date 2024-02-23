import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const forloginauthGuard: CanActivateFn = (route, state) => {
  var token=localStorage.getItem("Token");
  var id=localStorage.getItem("Id");
  if(token == null || id == null)
  {
    return true;
  }else{
    var r=new Router();
    r.navigateByUrl("/drives");
    return false;
  }

};
