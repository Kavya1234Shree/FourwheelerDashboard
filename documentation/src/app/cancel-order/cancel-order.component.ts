import { CancelDialogComponent } from './../cancel-dialog/cancel-dialog.component';

// import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {

  public user:any;
 public phone:number;
  totalRec : number;
  page: number = 1;
  
  public popoverTitle: string = 'Deleting Record...';
  public popoverMessage: string = 'Are you sure to Delete ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  constructor(private httpClient:HttpClient,public matDialog: MatDialog) { 
    this.user = new Array<any>();
  }

  ngOnInit() {
  

    let resp = this.httpClient.get("https://apis.zeiger.tech/api/cancel-book");
    resp.subscribe((data)=>this.user=data)

   

   
    
        // this.loadEmployee();
  }
//   private loadEmployee() {
//     this
//         .serv
//         .getEmployees()
//         .subscribe((resp: Response) => {
//             this.user= resp.json();
//             this.totalRec = this.user.length;
//             console.log(this.totalRec);
//             console.log(this.page);
    
//             //console.log(JSON.stringify(resp.json()));    
//         });
// }
// deleteRow(phone){
//    console.log("phone **********",phone);
//   let resp=this.httpClient.get('https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/api/driverfour-owner/delete?phone='+phone);
//   resp.subscribe((data)=>this.user=data);
//   // this.phone=this.user['phone']
//   for(let i = 0; i < this.user.length; ++i){
//       if (this.user[i].phone === phone) {
//           this.user.splice(i,1);
//       }
//   }
// }

refresh() {
  window.location.reload();
}

  openModal(trans_uuid) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("Transacton id is ",trans_uuid)
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1100px";
    dialogConfig.data = trans_uuid;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CancelDialogComponent, dialogConfig);
  } 
 
}


