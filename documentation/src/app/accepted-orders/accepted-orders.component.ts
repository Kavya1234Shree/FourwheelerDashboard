import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accepted-orders',
  templateUrl: './accepted-orders.component.html',
  styleUrls: ['./accepted-orders.component.scss']
})
export class AcceptedOrdersComponent implements OnInit {
public picking_info: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp1= this.http.get("https://apis.zeiger.tech/api/driver-position/picking-info")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.picking_info= data;
    console.log(this.picking_info);
      }  )
  }

}
