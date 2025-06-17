import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleServiceService, VehicleType } from '../../service/Vehicle/vehicle-service.service';
import { User, UserServiceService } from '../../service/User/user-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-component',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './vehicle-component.component.html',
  styleUrl: './vehicle-component.component.css'
})
export class VehicleComponentComponent implements OnInit{

  vehicle:Vehicle[]=[];
  users:User[]=[];
  allvehicle:Vehicle[]=[];
  defaultVehicle:Vehicle={type: VehicleType.UNKNOWN,user:{
    id:0,
    name:'',
    email:'',
  }}

  constructor(private vehicleservice:VehicleServiceService,private userservice:UserServiceService,private route:Router){}
  ngOnInit(): void {
    this.loadUsers();
    this.getAllVehicle();
  }

  addBooking():void{
    this.vehicleservice.addVehicle(this.defaultVehicle).subscribe(data=>{
      this.vehicle.push(data);
      this.route.navigate(['']);
    })
  }

  loadUsers():void{
    this.userservice.getAll().subscribe(data=>{
      this.users=data;
     
    })
  }

  getAllVehicle():void{
    this.vehicleservice.getAll().subscribe(data=>{
      this.allvehicle=data;
    })
  }
}
