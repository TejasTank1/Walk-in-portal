import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  var token=localStorage.getItem("Token");
  var id=localStorage.getItem("Id");
  if(token==null || id==null)
  {
    return false;
  }
  else{
    return true;
  }

};
