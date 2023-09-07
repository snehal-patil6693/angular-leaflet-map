import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
    // Get the getAirportInfo
     getAirportInfo() {
      return this.http.get("https://demo3312326.mockable.io/getAirportInfo");
    }
    // Get Move Data
    getMoveData() {
      return this.http.get("https://demo3312326.mockable.io/getMoveData");
    }
     // Get Airfields to Unit Data
      getAirfieldstoUnit() {
      return this.http.get("https://demo3312326.mockable.io/getAirfieldsUnitData");
    }
     // Get Aircrafts to Unit Data
      getAirCraftstoPortData() {
      return this.http.get("https://demo3312326.mockable.io/getAircraftsPortsData");
    }
}
