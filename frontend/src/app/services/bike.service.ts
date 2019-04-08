import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';
import { Environment } from './environment';
import { ChangeBikeStatus } from '../models/change-bike-status';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bike: Bike[];
  environment: Environment;
  selectedbike: Bike;
  changebikestatus: ChangeBikeStatus;


  constructor(private http: HttpClient) {
    this.environment = new Environment();
    this.selectedbike = new Bike();
    this.changebikestatus = new ChangeBikeStatus();
  }
  getBike(_id: string) {
    return this.http.get(this.environment.urlBike + `/${_id}/studentdetail`);
  }
  getBikes() {
    return this.http.get(this.environment.urlBike);
  }

  getnotassignedBikes() {
    return this.http.get(this.environment.urlBike+"/unassigned");
  }

  postBike(bike: Bike) {
    return this.http.post(this.environment.urlBike, bike);
  }
  deleteBike(_id: string){
    return this.http.delete(this.environment.urlBike + `/${_id}`)
  } 
  deleteBikeStation(changebikestatus:ChangeBikeStatus) {
    return this.http.post(this.environment.urlStation+"/deletebike", changebikestatus);
  }
  postBikeStation(changebikestatus: ChangeBikeStatus) {
    return this.http.post(this.environment.urlStation+"/addbike", changebikestatus);
  }
}
