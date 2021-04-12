import { Component, OnInit } from '@angular/core';
import {  RouterModule,Router } from '@angular/router';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username: string ='';
  password: string = '';

  constructor( private http: HttpClient ,private router :Router) { }
  msg="";
  ngOnInit() {
  }
  onLogin(Username,password){
    this.Username=Username;
    this.password=password;

    this.http.post('https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/api/login',{Username:this.Username,password:this.password})
    .subscribe((data:any)=>{
    //  console.log(data);
     alert("Login Successfully and welcome to ZEIGER");
     var username =this.Username
var pwsd=this.password

localStorage.setItem('username',username)

    //  localStorage.setItem()
      this.router.navigate(['/dashboard']);
     },(error:HttpErrorResponse)=>{
      alert("Unable to Register..please provide valid username and password");
    });


  }
}
