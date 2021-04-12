import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-bookinglogin',
  templateUrl: './bookinglogin.component.html',
  styleUrls: ['./bookinglogin.component.scss']
})
export class BookingloginComponent implements OnInit {
  num1 : string ='';

  constructor(private http: HttpClient ,private router :Router) { }

  ngOnInit() {
  }
  onLogin(num){
    this.num1=num;
    this.http.post("http://165.22.219.195:4000/api/auth?phone=" + num,{})
    .subscribe((data:any)=>{
     console.log(data);
     alert("OTP Send Successfully");
      this.router.navigate(['/otp',{phone:this.num1}]);

    },(error:HttpErrorResponse)=>{
      alert(error);
    });


  }
}
