import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PubNubAngular } from 'pubnub-angular2';
@Component({
  selector: 'app-interdialog',
  templateUrl: './interdialog.component.html',
  styleUrls: ['./interdialog.component.scss']
})
export class InterdialogComponent implements OnInit {
  detail: any;
  name: any;
  status: any;
  order_time: any;
  customer_uuid: any;
  pick_up_address: any;
  amount: any;
  type_of_packages: any;
  selectchildvehical: any;
  phone: any;
  address: any;
  landmark: any;
  FourIntr_uuid: any;
  pod: any;
  duration: any;
  approximate_amount: any;
  distance: any;
  PubNub: PubNubAngular;
  public popoverTitle: string = 'cancel';
  public popoverMessage: string = 'Are you sure want to cancel this order ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  disableBtn: boolean=true;
  disableBtn1: boolean=true;
  order_time1: string;
  completed_time: any;
  completed_time1: string;
  cancelled_time: any;
  cancelled_time1: string;
  constructor( private http: HttpClient,pubnub: PubNubAngular,
    public dialogRef: MatDialogRef<InterdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      pubnub.init({
        publishKey: "pub-c-8fdb08a0-2601-4b37-980f-d49560aaaef7",
      subscribeKey: "sub-c-5cf1dae2-9766-11ea-84ed-1e1b4c21df71",
      secretKey: "sec-c-MDJkODdkMzUtY2IwMy00OTI5LTk3MjktMDMwMTEzYWY4Y2Nh"
        
        });
     this.PubNub = pubnub
      this.FourIntr_uuid = data; 
      console.log("id",this.FourIntr_uuid)
    }

    ngOnInit() {
     
      let resp1= this.http.get("https://apis.zeigerapp.in/api/inter-state/id?FourIntr_uuid="+this.FourIntr_uuid)
      resp1.subscribe((data: any)=>{
        this.detail= data
        this.FourIntr_uuid= data['FourIntr_uuid']
        this.pod= data['pod']
         this.duration= data['duration']
         this.status= data['status']
         this.order_time= data['order_time']
         this.order_time1 = new Date(this.order_time).toString();
         this.completed_time=data['completed_time']
         this.completed_time1 = new Date(this.completed_time).toString();
         this.cancelled_time=data['cancelled_time']
         this.cancelled_time1 = new Date(this.cancelled_time).toString();
         this.approximate_amount= data['approximate_amount']
         this.selectchildvehical= data['selectchildvehical']
        this.amount= data['amount']
         this.distance=data['distance']
         this.type_of_packages= data['type_of_packages']
         this.pick_up_address= data['pick_up_address']
         this.customer_uuid= data['customer_uuid']
         this.name=data.contact_person.name
         console.log("Name",this.name)
         this.phone= data.contact_person.phone
         this.address= data.delivery_address.address
         this.landmark=data.delivery_address.landmark
         if(this.status=='cancelled'||this.status=='completed'){
          this.disableBtn=false;
          this.disableBtn1=false;
         }
        });
  
  
    }
    cancel() {
      this.PubNub.publish(
        {
          message: {"id": this.FourIntr_uuid,
                     "cust_id":this.customer_uuid},
              channel: 'interstate_cancel'
          },
          (status, response) => {
              if (status.error) {
                  console.log(status);
              } else {
                  console.log('message Published w/ timetoken', response.timetoken);
                  this.refresh();
              }
          }
      );
    }
    complete() {
      this.PubNub.publish(
        {
          message: {"id": this.FourIntr_uuid,
                     "cust_id":this.customer_uuid},
              channel: 'interstate_complete'
          },
          (status, response) => {
              if (status.error) {
                  console.log(status);
              } else {
                  console.log('message Published w/ timetoken', response.timetoken);
                  this.refresh();
              }
          }
      );
    }

    refresh() {
      window.location.reload();
    }
    
    closeModal() {
      this.dialogRef.close();
    }
  }
