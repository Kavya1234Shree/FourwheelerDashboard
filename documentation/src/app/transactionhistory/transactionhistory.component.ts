import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorydialogComponent } from 'app/historydialog/historydialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.scss']
})
export class TransactionhistoryComponent implements OnInit {
  detail: any;
  status:any;
  old_trans_uuid: any;
  type_of_vehicle: any;
  order_time: any;
  customer_uuid:any;
  pick_up_address: any;
  type_of_packages: any;
  amount: any;
  accepted_time: any;
  driver_uuid:any;
  delivered_time: any;
  pick_up_time: any;
  selectchildvehical: any;
  payment_method: any;
  vehicle_amount: any;
  name: any;
  phone: any;
  address: any;
  landmark: any;

  
  
   totalRec : number;
   page: number = 1;
  constructor(private http:HttpClient, public matDialog :MatDialog) {

   }
   refresh() {
    window.location.reload();
  }
  ngOnInit() {
    let response= this.http.get("https://apis.zeiger.tech/api/del-history/history")
    response.subscribe((data: any)=>{
      this.detail= data;
    console.log("history",this.detail);
    // console.log("status", this.detail[0].status);
    console.log("id",this.detail[0].old_trans_uuid)
  })

}
openModal( status, old_trans_uuid, type_of_vehicle, order_time, customer_uuid, pick_up_address, type_of_packages, 
  amount, accepted_time, driver_uuid, delivered_time, pick_up_time, selectchildvehical, payment_method, vehicle_amount, name, phone,
  address, landmark) {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.disableClose = true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "800px";
  dialogConfig.width = "1000px";
  dialogConfig.data = status, old_trans_uuid, type_of_vehicle, order_time, customer_uuid, pick_up_address, type_of_packages, 
  amount, accepted_time, driver_uuid, delivered_time, pick_up_time, selectchildvehical, payment_method, vehicle_amount, name, phone,
  address, landmark
  const modalDialog = this.matDialog.open(HistorydialogComponent, dialogConfig);
} 

}
