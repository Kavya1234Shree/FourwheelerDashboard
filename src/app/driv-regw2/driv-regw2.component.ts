import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driv-regw2',
  templateUrl: './driv-regw2.component.html',
  styleUrls: ['./driv-regw2.component.scss']
})
export class DrivRegw2Component implements OnInit {

  public drivtwo_info: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp1= this.http.get("https://apis.zeigerapp.in/api/driver-registration/drivertwo-info ")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivtwo_info= data;
    console.log(this.drivtwo_info);
      }  )

  }



}

