import { Component, OnInit } from '@angular/core';
import { ParkingSpot, ParkingSpotServiceService, ParkingStatus } from '../../service/ParkingSpot/parking-spot-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-parking-sopt',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './parking-sopt.component.html',
  styleUrl: './parking-sopt.component.css'
})
export class ParkingSoptComponent implements OnInit{

  parkingSpot:ParkingSpot[]=[];
  all:ParkingSpot[]=[];
  defaultParkingSpot:ParkingSpot={ location:'', status:ParkingStatus.UNKNOWN};

  constructor(private parkingservice:ParkingSpotServiceService){}
  ngOnInit(): void {
    this.getAll();
  }

  addParking():void{
    this.parkingservice.addParkingSpot(this.defaultParkingSpot).subscribe(data=>{
      this.parkingSpot.push(data);
      this.defaultParkingSpot={ location:'', status:ParkingStatus.UNKNOWN};
    })
  }

  getAll():void{
    this.parkingservice.getAll().subscribe(data=>{
      this.all=data;
    })
  }
}
