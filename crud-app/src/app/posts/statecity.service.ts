import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { State, City } from "./post.model";

@Injectable({ providedIn: "root" })
export class StateCityService {

  private states: State[] = []; 
  private cities: City[] = [];    

  constructor(private http: HttpClient) {}

  getStates() {
    this.http
      .get("http://localhost:5000/api/getstates")
       .subscribe(x => {
        this.states=x.data;      
        
        return this.states;
      });
  }

  getCitites(id:number){
    this.http
      .get("http://localhost:5000/api/getcities/"+ id)
       .subscribe(x => {
        this.cities=x.data;      
        
        return this.cities;
      });
  }

  
}
