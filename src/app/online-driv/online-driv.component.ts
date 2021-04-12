import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeServices } from './../active.service';

@Component({
  selector: 'app-online-driv',
  templateUrl: './online-driv.component.html',
  styleUrls: ['./online-driv.component.scss']
})
export class OnlineDrivComponent implements OnInit {
  public online_info: any;
  public driver_info: any;

  totalRec : number;
  page: number = 1;
 

  public popoverTitle: string = 'Sending...';
  public popoverMessage: string = 'Are you sure want to send message ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  driver_uuid: any;
  updated_time: any;
  updated_time1: string;
   constructor(private http:HttpClient,private router:Router,private servi: EmployeeServices) { 

    this.online_info = new Array<any>();
      ////////online driver info//////////


     
   }
   ngOnInit() {
     let resp1= this.http.get("https://apis.zeigerapp.in/api/driver-position/online-info")
 resp1.subscribe((data: any)=>{
   console.log(data);
 this.online_info= data;
 console.log(this.online_info);

 this.updated_time=data['updated_time']
 this.updated_time1 = new Date(this.updated_time).toString().slice(0,-39);
   }  )

 }
   sendMes(driver_uuid) {

    this.driver_uuid=driver_uuid;
  let resp = this.http.get<any>("https://apis.zeigerapp.in/api/driver-position/sendmsg?driver_uuid="+this.driver_uuid);
  resp.subscribe((data:any)=>{
    alert(data.msg);

    this.router.navigate(['/dashboard']);

   },(error:HttpErrorResponse)=>{
     console.log(error);

     alert("unable to Send");
     });
   
  }
 
 }