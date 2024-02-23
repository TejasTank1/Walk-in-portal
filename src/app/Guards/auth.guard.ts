import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  var token=localStorage.getItem("Token");
  if(token==null)
  {

  }
  return true;
};
