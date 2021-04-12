import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-cus-list',
  templateUrl: './cus-list.component.html',
  styleUrls: ['./cus-list.component.scss']
})
export class CusListComponent implements OnInit {

  public user:any;
  public phone:number;
   totalRec : number;
   page: number = 1;
   
   public popoverTitle: string = 'Deleting Record...';
   public popoverMessage: string = 'Are you sure to Delete ?';
   public confirmClicked: boolean = false;
   public cancelClicked: boolean = false;
  user_Registered_time: any;
  user_Registered_time1: string;

  constructor(private httpClient:HttpClient,private serv: EmployeeService) { 

    this.user = new Array<any>();
  }

  ngOnInit() {

    
    let resp = this.httpClient.get("https://apis.zeigerapp.in/1.1/users/cust");
    resp.subscribe((data)=>this.user=data);

    this.user_Registered_time=data['login_date']
  this.user_Registered_time1 = new Date(this.user_Registered_time).toString().slice(0,-39);

  }

}
