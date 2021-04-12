// import { EmployeeServices } from './../active.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {Headers, Response} from '@angular/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { FourActiveDialogComponent } from 'app/four-active-dialog/four-active-dialog.component';
import { PubNubAngular } from 'pubnub-angular2';
import { DeactivateDialogComponent } from 'app/deactivate-dialog/deactivate-dialog.component';


@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.scss']
})
export class DeactivateComponent implements OnInit {

  public user:any;
  totalRec : number;
  page: number = 1;
  PubNub: PubNubAngular;

  public popoverTitle: string = 'DeActivating...';
  public popoverMessage: string = 'Are you sure want to Deactivate this Driver ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private httpClient:HttpClient,public matDialog: MatDialog,pubnub: PubNubAngular) { 
    this.user = new Array<any>();

    pubnub.init({
      publishKey: "pub-c-e1ff371c-75e5-4656-aa68-f8df1eb27da8",
      subscribeKey: "sub-c-924e0d28-3c2b-11ea-9443-9e82b35d3d47",
      secretKey: "sec-c-YWUzMzkyODctYTg0Ny00NTc0LWFjMDktNDcxNTAxMGMyNmM2"
      
      });
   this.PubNub = pubnub
  
  }

  ngOnInit() {

    let resp = this.httpClient.get("https://apis.zeiger.tech/api/deactivate");
    resp.subscribe((data)=>this.user=data);

    console.log('gggg');
        // this.loadEmployee();
  }
//   private loadEmployee() {
//     this
//        .servi
//         .getEmployeess()
//         .subscribe((resp: Response) => {
//             this.user= resp.json();
//             this.totalRec = this.user.length;
//             console.log(this.totalRec);
//             console.log(this.page);
    
            
//         });
// }
activateDriv(driver_uuid) {
  console.log(driver_uuid)
  this.PubNub.publish(
    {
      message: {Driver: driver_uuid},
          channel: 'activate'
      },
      (status, response) => {
          if (status.error) {
              console.log(status);
          } else {
              console.log('message Published w/ timetoken', response.timetoken);
          }
      }
  );
}

refresh() {
  window.location.reload();
}

openModal(driver_uuid) {
  const dialogConfig = new MatDialogConfig();
  // The user can't close the dialog by clicking outside its body
  
  console.log("driver id",driver_uuid)
  dialogConfig.disableClose = true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "1000px";
  dialogConfig.width = "1100px";
  dialogConfig.data = driver_uuid;
  // https://material.angular.io/components/dialog/overview
  const modalDialog = this.matDialog.open(DeactivateDialogComponent, dialogConfig);
} 



}
