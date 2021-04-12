import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';


@Component({
  selector: 'app-trans-dialog',
  templateUrl: './trans-dialog.component.html',
  styleUrls: ['./trans-dialog.component.scss']
})
export class TransDialogComponent implements OnInit {

  PubNub: PubNubAngular;

  user:any;
  address:any;
  landmark: any;
  name:any;
  phone:any;
  order_time:any;
  customer_uuid:any;
  pick_up_address:any;
  type_of_packages:any;
  amount:any;
  distance:any;
  type_of_vehicle:any;
  accepted_time:any;
  driver_uuid:any;
  selectchildvehical:any;
  vehicalcat:any;
  approximate_amount:any;
  pod:any;
  counter:any;
  duration:any; 
  wheretogo:any; 
  payment_method:any;
  manufacturer1:any;
  hourlytime:any;
  trans_uuid:any;
  status:any;
  contact_person:Array<any>;
  delivery_address:Array<any>;
  
  disableBtn:boolean=true;
  order_time1: string;
  accepted_time1: string;
  hourlytime1: string;
  pick_up_time:any;
  pick_up_time1: string;

  delivered1_time:any;
 delivered2_time:any;
 delivered3_time:any; 
 delivered4_time:any; 
 delivered5_time:any;
  delivered1_time1: string;
  delivered2_time1: string;
  delivered3_time1: string;
  delivered4_time1: string;
  delivered5_time1: string;

  mulpoint1:String;
  mulpoint2:String;
  mulpoint3:String;
  mulpoint4:String;
  mulpoint5:String;


  

  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute,pubnub: PubNubAngular,public dialogRef: MatDialogRef<TransDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log("my data",data)
 
   this.trans_uuid=data;
    

   pubnub.init({
    publishKey: "pub-c-e1ff371c-75e5-4656-aa68-f8df1eb27da8",
    subscribeKey: "sub-c-924e0d28-3c2b-11ea-9443-9e82b35d3d47",
    secretKey: "sec-c-YWUzMzkyODctYTg0Ny00NTc0LWFjMDktNDcxNTAxMGMyNmM2"
    
    });
 this.PubNub = pubnub
 

  }


  ngOnInit() {
  
    let resp = this.http.get("https://apis.zeiger.tech/api/transaction/id?trans_uuid="+this.trans_uuid);
    resp.subscribe((data : any)=>{
    this.user=data;
    console.log("data inside ", data);
    this.order_time =data['order_time']
    this.order_time1 = new Date(this.order_time).toString() ;
    this.customer_uuid=data['customer_uuid']
    this.pick_up_address=data['pick_up_address']
    this.type_of_packages=data['type_of_packages']
    this.amount = data['amount']
    this.distance=data['distance']
    this.type_of_vehicle = data['type_of_vehicle']
    this.accepted_time=data['accepted_time']
    this.accepted_time1 = new Date(this.accepted_time).toString() ;
    this.driver_uuid=data['driver_uuid']
    this.selectchildvehical=data['selectchildvehical']
    this.vehicalcat=data['vehicalcat']
    this.approximate_amount=data['approximate_amount']
    this.pod=data['pod']
    this.counter=data['counter']
    this.duration=data['duration']
    this.wheretogo=data['wheretogo']
    this.payment_method=data['payment_method']
    this.hourlytime=data['hourlytime']
    this.hourlytime1 = new Date(this.hourlytime).toString() ;
    this.trans_uuid=data['trans_uuid']
    this.status=data['status']
    this.pick_up_time=data['pick_up_time']
    this.pick_up_time1 = new Date(this.pick_up_time).toString() ;
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

    this.name=data.contact_person.name;
    console.log("Name",this.name);
    this.phone= data.contact_person.phone
   this.address= data.delivery_address.address
   this.landmark=data.delivery_address.landmark
   this.mulpoint1=data.multipoint.mulpoint1
   this.mulpoint2=data.multipoint.mulpoint2
   this.mulpoint3=data.multipoint.mulpoint3
   this.mulpoint4=data.multipoint.mulpoint4
   this.mulpoint5=data.multipoint.mulpoint5

  if(this.status=='Cancel' || this.status=='available'){
    this.disableBtn=false;
  }
  });
  
}


completeord(driver_uuid,trans_uuid,customer_uuid) {
  console.log(driver_uuid,trans_uuid,customer_uuid)
  this.PubNub.publish(
    {
      message: {Complete: driver_uuid,trans_uuid,customer_uuid},
          channel: 'Transactioncomplete'
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


// this. form01.valueChanges 
//             .subscribe((changedObj: any) => {
//                  this.disableBtn = this. form01.valid;
//             });

closeModal() {
  this.dialogRef.close();
}
}

