import { Component } from '@angular/core';
import { User, UserServiceService } from '../../service/User/user-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-get-user-by-id',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './get-user-by-id.component.html',
  styleUrl: './get-user-by-id.component.css'
})
export class GetUserByIdComponent {

  id:number=0;
  userById?:User;
  constructor(private userservice:UserServiceService){}

  getUser():void{
    this.userservice.getUserById(this.id).subscribe(data=>{
      this.userById=data;
    })
  }
}
