import { TwowheelDialogComponent } from './../twowheel-dialog/twowheel-dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-twowheel-onlineregistration',
  templateUrl: './twowheel-onlineregistration.component.html',
  styleUrls: ['./twowheel-onlineregistration.component.scss']
})
export class TwowheelOnlineregistrationComponent implements OnInit {
// public driver_two: any;

public phone:any;
public  vehicle_number: any;
public driver_name: any;
public driver_address: any;
public driver_city: any;
public driver_state: any;
public driver_zip: any;
public email: any;

   public detail: any;
//  public data1: any;
  constructor(private http:HttpClient, public matDialog :MatDialog) { }

  ngOnInit() {
    let resp1= this.http.get("https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/api/drivertwo")
    resp1.subscribe((data: any)=>this.detail= data);
  }
 openModal( phone, vehicle_number, driver_name, driver_address, driver_city, driver_state, driver_zip, email, profile_photo) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    // console.log("phone number is ", phone)
    // console.log("vehicle number is ", vehicle_number)
    // console.log("driver name is ", driver_name)
    // console.log("driver city is ", driver_city)
    dialogConfig.disableClose = true;
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "1000px";
    dialogConfig.data =  phone, vehicle_number, driver_name, driver_address, driver_city, driver_state, driver_zip, email, profile_photo
    const modalDialog = this.matDialog.open(TwowheelDialogComponent, dialogConfig);
  } 
 
}