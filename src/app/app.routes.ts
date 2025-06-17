import { Routes } from '@angular/router';
import { AddUserComponent } from './User/add user/add-user/add-user.component';
import { GetUserByIdComponent } from './User/get-user-by-id/get-user-by-id.component';
import { GetUsersComponent } from './User/get-users/get-users.component';
import { VehicleComponentComponent } from './Vehicle/vehicle-component/vehicle-component.component';
import { ParkingSoptComponent } from './ParkingSpot/parking-sopt/parking-sopt.component';
import { BookingComponentComponent } from './Booking/booking-component/booking-component.component';

export const routes: Routes = [
    {path:'add-user',component:AddUserComponent},
    {path:'get-user-by-id',component:GetUserByIdComponent},
    {path:'get-users',component:GetUsersComponent},

    {path:'vehicle',component:VehicleComponentComponent},

    {path:'parkingspot',component:ParkingSoptComponent},

    {path:'booking',component:BookingComponentComponent}
];
