    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from "../models/station";
import { Environment } from './environment';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  
  station: Station[];
  environment: Environment;
  selectedstation: Station;

  
  
  getStation(_id: string) {
    return this.http.get(this.environment.urlStation + `/${_id}`);
  }
  getAllStations(){
    return this.http.get(this.environment.urlStation);
  }
  postStation(station: Station){
    return this.http.post(this.environment.urlStation, station);
    
  }
  deleteStation(_id: string){
    return this.http.delete(this.environment.urlStation + `/${_id}`)
  } 

  constructor(private http: HttpClient) { 
    this.environment = new Environment();
    this.selectedstation = new Station();
  }
}
