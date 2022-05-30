import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-hotel',
  templateUrl: './service-hotel.component.html',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }'],
  styleUrls: ['./service-hotel.component.scss']
})
export class ServiceHotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
