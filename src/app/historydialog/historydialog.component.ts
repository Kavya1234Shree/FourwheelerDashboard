
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-historydialog',
  templateUrl: './historydialog.component.html',
  styleUrls: ['./historydialog.component.scss']
})
export class HistorydialogComponent implements OnInit {
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
  contact_person:any;
  phone: any;
  address: any;
  landmark: any;
  delivered_time1: any;
  delivered_time2: any;
  accepted_time1: string;
  order_time1: string;
  pick_up_time1: string;
  delivered1_time: any;
  delivered1_time1: string;
  delivered2_time: any;
  delivered2_time1: string;
  delivered3_time: any;
  delivered3_time1: string;
  delivered4_time: any;
  delivered4_time1: string;
  delivered5_time: any;
  delivered5_time1: string;
  mulpoint1: any;
  mulpoint2: any;
  mulpoint3: any;
  mulpoint4: any;
  mulpoint5: any;

  constructor( private http: HttpClient,
    public dialogRef: MatDialogRef<HistorydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.old_trans_uuid = data; 
     console.log("id",this.old_trans_uuid)
    }

  ngOnInit() {
    console.log("id",this.old_trans_uuid);
    let resp1= this.http.get("https://apis.zeigerapp.in/api/del-history/history-id?old_trans_uuid="+this.old_trans_uuid)
    resp1.subscribe((data: any)=>{
      this.detail= data
      // console.log("data",this.contact_person.name)
      this.status= data['status']
      this.old_trans_uuid= data['old_trans_uuid']
       this.type_of_vehicle= data['type_of_vehicle']
       this.order_time= data['order_time']
       this.order_time1 = new Date(this.order_time).toString()  ;
       this.customer_uuid= data['customer_uuid']
       this.pick_up_address= data['pick_up_address']
      this.amount= data['amount']
       this.type_of_packages=data['type_of_packages']
       this.accepted_time= data['accepted_time']
       this.accepted_time1 = new Date(this.accepted_time).toString()  ;

       this.driver_uuid= data['driver_uuid']
       this.delivered_time= data['delivered_time']

       this.delivered_time1 = new Date(this.delivered_time).toString()  ;
      
       console.log("FinalTIME", this.delivered_time1)
     
       this.pick_up_time= data['pick_up_time']
       this.pick_up_time1 = new Date(this.pick_up_time).toString()  ;
       
       this.selectchildvehical=data['selectchildvehical']
       this.payment_method=data['payment_method']
       this.vehicle_amount= data['vehicle_amount']
       
       this.delivered1_time=data['delivered1_time']
    this.delivered1_time1 = new Date(this.delivered1_time).toString() ;
    this.delivered2_time=data['delivered2_time']
    this.delivered2_time1 = new Date(this.delivered2_time).toString() ; 
    this.delivered3_time=data['delivered3_time']
    this.delivered3_time1 = new Date(this.delivered3_time).toString() ; 
    this.delivered4_time=data['delivered4_time']
    this.delivered4_time1 = new Date(this.delivered4_time).toString() ; 
    this.delivered5_time=data['delivered5_time']
    this.delivered5_time1 = new Date(this.delivered5_time).toString() ; 
      

       this.name=data.contact_person.name
       console.log("Name",this.name)
      //  this.name =data['name']
       this.phone= data.contact_person.phone
       this.address= data.delivery_address.address
       this.landmark=data.delivery_address.landmark
       this.mulpoint1=data.multipoint.mulpoint1
   this.mulpoint2=data.multipoint.mulpoint2
   this.mulpoint3=data.multipoint.mulpoint3
   this.mulpoint4=data.multipoint.mulpoint4
   this.mulpoint5=data.multipoint.mulpoint5

      });


  }
 
  closeModal() {
    this.dialogRef.close();
  }
}
