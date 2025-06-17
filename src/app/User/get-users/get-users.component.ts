import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from '../../service/User/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-users',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './get-users.component.html',
  styleUrl: './get-users.component.css'
})
export class GetUsersComponent implements OnInit {

 

  users:User[]=[];
  
  ngOnInit(): void {
    this.loadUsers();
  }

  constructor(private userservice:UserServiceService){}

  loadUsers():void{
    this.userservice.getAll().subscribe(data=>{
      this.users=data;
    })
  }

  updatedUser:User={id:0,name:'',email:''};
  form=false;
  popluateUser(user:User) {
    this.updatedUser={...user};
    this.form=true;
    }

  updateUser():void{
    if(this.updatedUser.id != null){
      this.userservice.updateUser(this.updatedUser.id,this.updatedUser).subscribe(data=>{
        this.loadUsers();
        this.updatedUser={id:0,name:'',email:''};
        this.form=false;

      })
    }
    
  }
}
