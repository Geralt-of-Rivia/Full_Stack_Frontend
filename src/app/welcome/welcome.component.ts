import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:string;
  msgfrmService:string;

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }
  getWelcome(){
    this.service.executehelloworldbeanserviec().subscribe(
      response => this.handleSuccessfulResponce(response),
      error => this.handleErrorResponse(error));
    //console.log(this.service.executehelloworldbeanserviec());
  }
  getWelcomeWithPath(){
    this.service.executehelloworldbeanPathserviec(this.name).subscribe(
      response => this.handleSuccessfulResponce(response),
      error => this.handleErrorResponse(error));
    //console.log(this.service.executehelloworldbeanserviec());
  }
  handleSuccessfulResponce(response){
    this.msgfrmService = response.msg;
    //console.log(response.msg);
  }
  handleErrorResponse(error){
    //console.log(error.error.message);
    this.msgfrmService = error.error.message;
  }

}
