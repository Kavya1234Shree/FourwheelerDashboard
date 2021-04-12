import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import { PubNubAngular } from 'pubnub-angular2';


@Component({
  selector: 'app-vendor-dialog',
  templateUrl: './vendor-dialog.component.html',
  styleUrls: ['./vendor-dialog.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      //  state('default', style({ transform: 'rotate1(0)' })),
      //  state('rotated', style({ transform: 'rotate1(90deg)' })),
      //  state('rotated', style({ transform: 'rotate(-90deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
]
})
export class VendorDialogComponent implements OnInit {

  // PubNub: PubNubAngular;

  user:any;
  vendor_uuid:any;
  address:string;
  phone:any;
  vendor_name:any;
  company_email:any;
  company_name:any;
  type_of_company:any;
  GSTN:any;
  address1:any;
  city:any;
  state:any;
  zip:any;
  account_no:number;
  IFSC_code:number;
  type_of_account:string;
  escalation_matrices_level1_contact:any;
  escalation_matrices_level2_contact:any;
  escalation_matrices_level3_contact:any;
  GST_certificate:any;
  GST_certificate2:any;
  disableBtn:boolean=true;
  
  state1: string = 'default';
  
  rotate() {
    this.state1 = (this.state1 === 'default' ? 'rotated' : 'default');
}

  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute,public dialogRef: MatDialogRef<VendorDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log("my data",data)
 
   this.vendor_uuid=data;


//    pubnub.init({
//     publishKey:  "pub-c-e1ff371c-75e5-4656-aa68-f8df1eb27da8",
//     subscribeKey: "sub-c-924e0d28-3c2b-11ea-9443-9e82b35d3d47",
//     secretKey:"sub-c-924e0d28-3c2b-11ea-9443-9e82b35d3d47"
    
//     });
//  this.PubNub = pubnub
 

  }
  ongstcertificateFileChanged(event) {
    this.GST_certificate=<File> event.target.files[0];
    this.GST_certificate2 =<File> event.target.files[0];
    console.log(this.GST_certificate);
    var reader = new FileReader();
    reader.readAsDataURL(this.GST_certificate); 
    reader.onload = (_event) => { 
      this.GST_certificate = reader.result;
    } 
 }


  ngOnInit() {
  
    let resp = this.http.get("https://apis.zeiger.tech/api/vendor-reg/id?vendor_uuid="+this.vendor_uuid);
    resp.subscribe((data)=>{
    this.user=data;
    this.vendor_name =data['vendor_name']
    this.phone=data['phone']
    this.company_email=data['company_email']
    this.company_name = data['company_name']
    this.type_of_company=data['type_of_company']
    this.GSTN = data['GSTN']
    this.vendor_uuid=data['vendor_uuid']
    // console.log("Name",name)
    this.address1=data['address1']
    this.city= data['city']
   this.state= data['state']
   this.zip=data['zip']
   this.account_no=data['account_no']
    this.IFSC_code= data['IFSC_code']
   this.type_of_account= data['type_of_account']
   this.escalation_matrices_level1_contact=data['escalation_matrices_level1_contact']
   this.escalation_matrices_level2_contact=data['escalation_matrices_level2_contact']
   this.escalation_matrices_level3_contact=data['escalation_matrices_level3_contact']

   this.GST_certificate='https://apis.zeiger.tech/'+data['GST_certificate']
   this.GST_certificate2 = new File([this.GST_certificate],"dlscan.jpg",{type:"image/jpeg"});

  // if(this.status=='Cancel' || this.status=='available'){
  //   this.disableBtn=false;
  // }
  });
  
}


// completeord(driver_uuid,trans_uuid,customer_uuid) {
//   console.log(driver_uuid,trans_uuid,customer_uuid)
//   this.PubNub.publish(
//     {
//       message: {Complete: driver_uuid,trans_uuid,customer_uuid},
//           channel: 'Transactioncomplete'
//       },
//       (status, response) => {
//           if (status.error) {
//               console.log(status);
//           } else {
//               console.log('message Published w/ timetoken', response.timetoken);
//           }
//       }
//   );
// }
closeModal() {
  this.dialogRef.close();
}

}
