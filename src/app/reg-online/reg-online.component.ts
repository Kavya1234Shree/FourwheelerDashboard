import { DialogDataExampleDialogComponent } from './../dialog-data-example-dialog/dialog-data-example-dialog.component';
import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import * as xlsx from 'xlsx';


@Component({
  selector: 'app-reg-online',
  templateUrl: './reg-online.component.html',
  styleUrls: ['./reg-online.component.scss']
})
export class RegOnlineComponent implements OnInit {
userphone:any;
usernumber:any;
userVehicleNumber:any;
userWorkPreference:any;

public user:any;
 public phone:number;
  totalRec : number;
  page: number = 1;
  
  public popoverTitle: string = 'Deleting Record...';
  public popoverMessage: string = 'Are you sure to Delete ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  driverusers: any;
  active: any;
  category: any;
  bodytype: any;
  willaccept: any;

  
  constructor(private httpClient:HttpClient,public matDialog: MatDialog,private serv: EmployeeService, private http:HttpClient,) { 
    this.user = new Array<any>();
  }

  ngOnInit() {
  

    let resp = this.httpClient.get("https://apis.zeigerapp.in/api/driverfour-owner");
    resp.subscribe((data:any)=>{this.user=data})

    
        this.loadEmployee();
  }
  private loadEmployee() {
    this
        .serv
        .getEmployees()
        .subscribe((resp: Response) => {
            this.user= resp.json();
            this.totalRec = this.user.length;
            console.log(this.totalRec);
            console.log(this.page);
    
            //console.log(JSON.stringify(resp.json()));    
        });
}

refresh() {
  window.location.reload();
}
deleteRow(phone){
   console.log("phone **********",phone);
  let resp=this.httpClient.get('https://apis.zeigerapp.in/api/driverfour-owner/delete?phone='+phone);
  resp.subscribe((data)=>this.user=data);
  // this.phone=this.user['phone']
  for(let i = 0; i < this.user.length; ++i){
      if (this.user[i].phone === phone) {
          this.user.splice(i,1);
      }
  }
}


  openModal(phone,vehicle_number,work_preference,cancelled_cheque_image) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("phone is ",phone)
    console.log("vehicle number is  ",vehicle_number)
    console.log("wprkong is",work_preference)
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1100px";
    dialogConfig.data = phone,vehicle_number,work_preference,cancelled_cheque_image;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DialogDataExampleDialogComponent, dialogConfig);
  } 
 
   download() {
    let fileName = 'FourWheelerOnlineRegistration.csv';
    let columnNames = ["Vendor_uuid","Phone","Vehicle Number","Body Type","Category","Active","Work Preference","Will Accept to work for below category"];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';


    this.http.get("https://apis.zeigerapp.in/api/driverfour-owner")
    .subscribe((data:any)=>{
      data=this.user
      for(let i=0 ;i < this.user.length; ++i){
  
    this.userphone=this.user[i].phone;
  this.active=this.user[i].active;
  this.category=this.user[i].category;
  this.bodytype=this.user[i].body_type;
  this.willaccept=this.user[i].will_accept_to_work_for_below_category
  this.usernumber=this.user[i].vendor_uuid;
 this.userVehicleNumber=this.user[i].vehicle_number;
    this.userWorkPreference=this.user[i].work_preference;

    // console.log("Finalnumber",this.usernumber);
    csv += [[this.usernumber] ,[this.userphone] ,[this.userVehicleNumber] ,[this.bodytype] ,[this.category] ,[this.active] ,[this.userWorkPreference] ,[this.willaccept] ].join(',');
    csv += '\r\n';
    }
      // console.log("DriverData",data);
  

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  })
  }



}

