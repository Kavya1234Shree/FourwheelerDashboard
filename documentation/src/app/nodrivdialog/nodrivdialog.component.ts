import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-nodrivdialog',
  templateUrl: './nodrivdialog.component.html',
  styleUrls: ['./nodrivdialog.component.scss']
})
export class NodrivdialogComponent implements OnInit {
  detail: any;
  trans_uuid:any;
  customer_uuid: any;
  pick_up_address: any;
  duration: any;
  type_of_packages: any;
  amount: any;
  distance: any;
  selectchildvehical: any;
  approximate_amount: any;
  pod: any;
  name: any;
  phone: any;
  landmark: any;
  address: any;
  order_time: any;
  order_time1: string;
 constructor( private http: HttpClient,
    public dialogRef: MatDialogRef<NodrivdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.trans_uuid = data; 
      // console.log("id",this.FourIntr_uuid)
    }

    ngOnInit() {
     
      let resp1= this.http.get("https://apis.zeiger.tech/api/nodriver/id?trans_uuid="+this.trans_uuid)
      resp1.subscribe((data: any)=>{
        this.detail= data
        console.log("data1",this.detail)
        this.trans_uuid= data['trans_uuid']
        this.customer_uuid= data['customer_uuid']
         this.pick_up_address= data['pick_up_address']
         this.duration= data['duration']
         this.type_of_packages= data['type_of_packages']
        this.amount= data['amount']
         this.distance=data['distance']
         this.selectchildvehical= data['selectchildvehical']
         this.approximate_amount= data['approximate_amount']
         this.pod= data['pod']
         this.order_time= data['order_time']
         this.order_time1 = new Date(this.order_time).toString();
         this.name=data.contact_person.name
         console.log("Name",this.name)
         this.phone= data.contact_person.phone
         this.address= data.delivery_address.address
         this.landmark=data.delivery_address.landmark
        });
  
  
    }
   
    closeModal() {
      this.dialogRef.close();
    }
  }
  
