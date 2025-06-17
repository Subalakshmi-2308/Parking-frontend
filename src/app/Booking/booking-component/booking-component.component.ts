import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, BookingDTO, BookingServiceService } from '../../service/Booking/booking-service.service';
import { ParkingSpot, ParkingSpotServiceService, ParkingStatus } from '../../service/ParkingSpot/parking-spot-service.service';

@Component({
  selector: 'app-booking-component',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './booking-component.component.html',
  styleUrl: './booking-component.component.css'
})
export class BookingComponentComponent implements OnInit{

  booking:Booking[]=[];
  parking:ParkingSpot[]=[];
  bookings:Booking[]=[];
  bookingdetails!:BookingDTO;
  defaultBooking:Booking={userId:0, parkingSpot:{ location:'', status:ParkingStatus.UNKNOWN},timestamp:new Date()};

  searchId:number=0;
  constructor(private bookingservice:BookingServiceService,private parkingservice:ParkingSpotServiceService){}
  ngOnInit(): void {
    this.loadParking();
    this.loadAll();
  }

  loadParking():void{
    this.parkingservice.getAll().subscribe(data=>{
      this.parking=data;
    })
  }

  loadAll():void{
    this.bookingservice.getAll().subscribe(data=>{
      this.bookings=data;
    })
  }

  addBooking():void{
    this.bookingservice.addBooking(this.defaultBooking).subscribe(data=>{
      this.booking.push(data);
      this.defaultBooking={userId:0, parkingSpot:{ location:'', status:ParkingStatus.UNKNOWN},timestamp:new Date()};
      this.loadAll();
    })
  }

  getBookingDetails():void{
    this.bookingservice.getBookingDetails(this.searchId).subscribe(data=>{
      this.bookingdetails=data;
    })
  }
}
