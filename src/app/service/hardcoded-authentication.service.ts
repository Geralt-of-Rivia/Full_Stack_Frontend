import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password) {
    if(username=='soumyadeep' && password==12345){
      sessionStorage.setItem("authenticatedUser",username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
