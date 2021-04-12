import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-picked-info',
  templateUrl: './picked-info.component.html',
  styleUrls: ['./picked-info.component.scss']
})
export class PickedInfoComponent implements OnInit {

  public picked_info: any;
  public driver_info: any;
    constructor(private http:HttpClient) { }
  
    ngOnInit() {
      let resp1= this.http.get("https://apis.zeigerapp.in/api/transaction/picked-info")
      resp1.subscribe((data: any)=>{
        console.log(data);
      this.picked_info= data;
      console.log(this.picked_info);
        }  )
    }
  
  }