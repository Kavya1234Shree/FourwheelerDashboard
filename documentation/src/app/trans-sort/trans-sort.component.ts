import { TransDialogComponent } from './../trans-dialog/trans-dialog.component';

import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-trans-sort',
  templateUrl: './trans-sort.component.html',
  styleUrls: ['./trans-sort.component.scss']
})
export class TransSortComponent implements OnInit {
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
   
 
     let resp = this.httpClient.get("https://apis.zeiger.tech/api/transaction/orders");
     resp.subscribe((data)=>{
       this.user=data
      console.log("timeis")
    })
 
    
 
    
     
         
   }

   refresh() {
    window.location.reload();
  }
  
   openModal(trans_uuid,name) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("Transacton id is ",trans_uuid)
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1100px";
    dialogConfig.data = trans_uuid,name;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(TransDialogComponent, dialogConfig);
  } 
 
}
