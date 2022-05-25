import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }, { path: 'rooms', loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule) }, { path: 'roomdetail', loadChildren: () => import('./pages/roomdetail/roomdetail.module').then(m => m.RoomdetailModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
