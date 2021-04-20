import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executehelloworldbeanserviec() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello');
  }
  executehelloworldbeanPathserviec(name) {

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`);
  }
}
