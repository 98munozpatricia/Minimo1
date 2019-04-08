export class ChangeBikeStatus {
    bike_id: string;
    station_id: string;
    constructor(bike_id = '', station_id = ''){
        this.bike_id = bike_id;
        this.station_id = station_id;
      }
}
