import { Injectable } from '@angular/core';
import { User } from '../User/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Vehicle{
  id?:number;
  type: VehicleType.UNKNOWN;
  user:User;
}

export enum VehicleType{
  UNKNOWN='UNKNOWN',
  CAR='CAR',
  TRUCK='TRUCK',
  VAN='VAN'
}
@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  private baseUrl='http://localhost:1000/user';
  
    constructor(private http:HttpClient) { }

    addVehicle(vehicle:Vehicle):Observable<Vehicle>{
      return this.http.post<Vehicle>(`${this.baseUrl}/vehicle`,vehicle);
    }

    getAll():Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicle`)
    }
}
