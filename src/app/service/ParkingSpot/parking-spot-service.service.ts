import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ParkingSpot{
  id?:number;
  location:string;
  status:ParkingStatus.UNKNOWN;
}

export enum ParkingStatus{
  UNKNOWN='UNKNOWN',
  PARKED='PARKED',
  UNPARKED='UNPARKED'
}
@Injectable({
  providedIn: 'root'
})
export class ParkingSpotServiceService {

  private baseUrl='http://localhost:3000/parking'

  constructor(private http:HttpClient) { }

  addParkingSpot(parkingspot:ParkingSpot):Observable<ParkingSpot>{
    return this.http.post<ParkingSpot>(`${this.baseUrl}/parkingspot`,parkingspot);

  }

  getAll():Observable<ParkingSpot[]>{
    return this.http.get<ParkingSpot[]>(`${this.baseUrl}/parkingspot`)
  }
}
