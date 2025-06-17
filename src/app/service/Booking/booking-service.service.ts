import { Injectable } from '@angular/core';
import { ParkingSpot } from '../ParkingSpot/parking-spot-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User/user-service.service';

export interface Booking{
  id?:number,
  userId:number,
  parkingSpot:ParkingSpot;
  timestamp:Date;
}

export interface BookingDTO{
  id?:number,
  user:User,
  parkingSpot:ParkingSpot;
  timestamp:Date;
}

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  private baseUrl='http://localhost:3000/parking'

  constructor(private http:HttpClient) { }

  addBooking(booking:Booking):Observable<Booking>{
    return this.http.post<Booking>(`${this.baseUrl}/booking`,booking)
  }

  getAll():Observable<Booking[]>{
    return this.http.get<Booking[]>(`${this.baseUrl}/booking`)
  }

  getBookingDetails(id:number):Observable<BookingDTO>{
    return this.http.get<BookingDTO>(`${this.baseUrl}/booking/details/${id}`);
  }
}
