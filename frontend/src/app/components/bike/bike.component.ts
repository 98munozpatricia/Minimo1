import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';
import { ActivatedRoute } from '@angular/router';
import { StationService } from 'src/app/services/station.service';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  notasignedbikes: Bike[];
  station: Station;
  selectedbike: Bike;


  
  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService, private bikeService: BikeService) { 
    this.station = new Station();
    this.notasignedbikes = new Array();
    this.selectedbike = new Bike();
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = '';
      }
    });
    this.getStation(this.station._id);
  //  this.getBikes();
  }
  getStation(id: string) {
    this.stationService.getStation(id)
      .subscribe(res =>{
        this.station = res as Station;
      });
    console.log(this.station);
  }

}
