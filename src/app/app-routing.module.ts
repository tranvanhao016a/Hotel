import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/customs/home/home.module').then(m => m.HomeModule) },
 { path: 'about', loadChildren: () => import('./pages/customs/about/about.module').then(m => m.AboutModule) }, 
{ path: 'contact', loadChildren: () => import('./pages/customs/contact/contact.module').then(m => m.ContactModule) },
 { path: 'rooms', loadChildren: () => import('./pages/customs/rooms/rooms.module').then(m => m.RoomsModule) }, 
 { path: 'roomdetail', loadChildren: () => import('./pages/customs/roomdetail/roomdetail.module').then(m => m.RoomdetailModule) },
{ path: 'booking', loadChildren: () => import('./pages/customs/booking/booking.module').then(m => m.BookingModule) },
{ path: 'customer', loadChildren: () => import('./pages/admin/customer/customer.module').then(m => m.CustomerModule) },
{ path: 'staff', loadChildren: () => import('./pages/admin/staff/staff.module').then(m => m.StaffModule) },
{ path: 'room', loadChildren: () => import('./pages/admin/room/room.module').then(m => m.RoomModule) },
{ path: 'reservation', loadChildren: () => import('./pages/admin/reservation/reservation.module').then(m => m.ReservationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
