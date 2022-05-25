import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomdetailRoutingModule } from './roomdetail-routing.module';
import { RoomdetailComponent } from './roomdetail.component';


@NgModule({
  declarations: [
    RoomdetailComponent
  ],
  imports: [
    CommonModule,
    RoomdetailRoutingModule
  ]
})
export class RoomdetailModule { }
