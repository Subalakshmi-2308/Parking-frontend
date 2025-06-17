import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserServiceService } from '../../../service/User/user-service.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user:User[]=[];
  defaultUser={name:'',email:''};

  constructor(private userservice:UserServiceService, private router:Router){}

  addUser():void{
    this.userservice.addUser(this.defaultUser).subscribe(data=>{
      this.user.push(data);
      this.defaultUser={name:'',email:''};
      this.router.navigate(['']);
    })
  }
}
