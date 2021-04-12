import { DialogDataExampleDialogComponent } from './../dialog-data-example-dialog/dialog-data-example-dialog.component';
import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';




@Component({
  selector: 'app-reg-online',
  templateUrl: './reg-online.component.html',
  styleUrls: ['./reg-online.component.scss']
})
export class RegOnlineComponent implements OnInit {

public user:any;
 public phone:number;
  totalRec : number;
  page: number = 1;
  
  public popoverTitle: string = 'Deleting Record...';
  public popoverMessage: string = 'Are you sure to Delete ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  constructor(private httpClient:HttpClient,public matDialog: MatDialog,private serv: EmployeeService) { 
    this.user = new Array<any>();
  }

  ngOnInit() {
  

    let resp = this.httpClient.get("https://apis.zeiger.tech/api/driverfour-owner");
    resp.subscribe((data)=>this.user=data)

   

   
    
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
  let resp=this.httpClient.get('https://apis.zeiger.tech/api/driverfour-owner/delete?phone='+phone);
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
 
}

