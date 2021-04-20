import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isLoggedIn:boolean = false;
  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.isLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
