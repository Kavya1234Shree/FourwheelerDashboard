import { DriveronlyService } from './../only.service';
 import { OwnerregistrationComponent } from './../ownerregistration/ownerregistration.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {Headers, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-fourwheelerdriver',
  templateUrl: './fourwheelerdriver.component.html',
  styleUrls: ['./fourwheelerdriver.component.scss']
})
export class FourwheelerdriverComponent implements OnInit {
 public driverfours: any;
 totalRec : number;
  page: number = 1;
  phone:number;

  public popoverTitle: string = 'Deleting Record...';
  public popoverMessage: string = 'Are you sure to Delete ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private httpClient: HttpClient, public matDialog: MatDialog,private serv: DriveronlyService) { 
    this.driverfours = new Array<any>();
  }

  ngOnInit() {
    const resp = this.httpClient.get('https://apis.zeiger.tech/api/driverfour');
    
    resp.subscribe((data:any)=>{console.log('gggg',data)
    this.driverfours=data
  });
  
    
        this.loadEmployee();

}
deleteRow(phone){

  console.log("phone **********",phone);
 let resp=this.httpClient.get('https://apis.zeiger.tech/api/driverfour/delete?phone='+phone);
 resp.subscribe((data)=>this.driverfours=data);
 // this.phone=this.user['phone']
 for(let i = 0; i < this.driverfours.length; ++i){
     if (this.driverfours[i].phone === phone) {
         this.driverfours.splice(i,1);
     }
 }
}
private loadEmployee() {
  this
      .serv
      .getEmployees()
      .subscribe((resp: Response) => {
          this.driverfours= resp.json();
          this.totalRec = this.driverfours.length;
          console.log(this.totalRec);
          console.log(this.page);
  
          //console.log(JSON.stringify(resp.json()));    
      });
}

refresh() {
  window.location.reload();
} 

openModal(phone, work_preference, vehicle_number) {
  const dialogConfig = new MatDialogConfig();
  console.log('phone is', phone)
  console.log('vehicle_number is', vehicle_number)
  console.log('work preference is', work_preference)
  dialogConfig.disableClose = true;
  dialogConfig.id = 'modal-component';
  dialogConfig.height = "1000px";
    dialogConfig.width = "1100px";
  // tslint:disable-next-line:no-unused-expression
  dialogConfig.data = phone, vehicle_number, work_preference;
   const modalDialog = this.matDialog.open(OwnerregistrationComponent, dialogConfig)
}
}
