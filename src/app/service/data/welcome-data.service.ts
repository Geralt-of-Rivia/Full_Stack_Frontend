import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

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

    return this.http.get<HelloWorldBean>(`${API_URL}/hello/${name}`);
  }
}
