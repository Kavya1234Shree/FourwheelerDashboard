import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {  RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-otp-get',
  templateUrl: './otp-get.component.html',
  styleUrls: ['./otp-get.component.scss']
})
export class OtpGetComponent implements OnInit {
  trans_uuid:string='';

  constructor(private http: HttpClient ,private router :Router) { }
 otp="";
  ngOnInit() {
  }

  onEnter(trans_uuid){
    this.trans_uuid=trans_uuid;

    let resp=this.http.get("https://apis.zeigerapp.in/api/1.0/picked-otp/dashboard-otp?trans_uuid="+this.trans_uuid)
    resp.subscribe((data: any)=>{
      console.log(data);
    this.otp= data;
    console.log(this.otp);
      }  )
   
}
}
