import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-four-active-dialog',
  templateUrl: './four-active-dialog.component.html',
  styleUrls: ['./four-active-dialog.component.scss'],
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
export class FourActiveDialogComponent implements OnInit {

  work_preference:any[];
  packingList: string[] = ['ONLY LOCAL', 'LOCAL & OUTSTATION', 'OUTSTATION'];
 
 shown= false;
 phone:any;
 user:any;
 vehicle_number:any;
 alternate_contact_num:any;
 emergency_contact_num:any;
 driver_city:any;
 driver_state:any;
 driver_zip:any;
 category:any;
 badge:any;
 vehicle_registered_owner:any;
 manufacturer:any;
 class1:any;
 model:any;
 color:any;
 gvw_in_kg:any;
 body_asper_RC:any;
 unladen_weight:any;
 seating_capacity:any;
 road_tax_val:any;
 dl_expiry_date:any;
 bank_name:any;
 account_no:any;
 IFSC_code:any;
 type_of_account:any;
 body_type:any;
 cancelled_cheque_image:any;
 cancelled_cheque_image2:any;
 dl_scan_copy:any;
 dl_scan_copy2:any;
 driver_pan_card:any;
 driver_pan_card2:any;
 insurance_image:any;
 insurance_image2:any;
 owner_aadhar_card:any;
 owner_aadhar_card2:any;
//  permit_image:any;
//  permit_image2:any;
 profile_photo:any;
 profile_photo2:any;
//  puc_image:any;
//  puc_image2:any;
 rc_card_image:any;
 rc_card_image2:any;
//  vehicle_photo_front:any;
//  vehicle_photo_front2:any;
//  vehicle_photo_back:any;
//  vehicle_photo_back2:any;
//  vehicle_photo_left:any;
//  vehicle_photo_left2:any;
//  vehicle_photo_right:any;
//  vehicle_photo_right2:any;
 driver_aadhar_card :any;
 driver_aadhar_card2 :any;
 will_accept_to_work_for_below_category:any;

 state1: string = 'default';
 state2:string='default';
 state3:string='default';
 state4:string='default';
 state5:string='default';
 state6:string='default';
 state7:string='default';
 state8:string='default';
 state9:string='default';
 state10:string='default';
 state11:string='default';
 state12:string='default';
 state13:string='default';
 state14:string='default';
  registered_time: any;
  registered_time1: string;
 rotate() {
     this.state1 = (this.state1 === 'default' ? 'rotated' : 'default');
 }
 rotate1() {
  this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
}
rotate2() {
  this.state3 = (this.state3 === 'default' ? 'rotated' : 'default');
}

rotate3() {
  this.state4 = (this.state4 === 'default' ? 'rotated' : 'default');
}
rotate4() {
  this.state5 = (this.state5 === 'default' ? 'rotated' : 'default');
}
rotate5() {
  this.state6 = (this.state6 === 'default' ? 'rotated' : 'default');
}
rotate6() {
  this.state7 = (this.state7 === 'default' ? 'rotated' : 'default');
}
rotate7() {
  this.state8 = (this.state8 === 'default' ? 'rotated' : 'default');
}
rotate8() {
  this.state9 = (this.state9 === 'default' ? 'rotated' : 'default');
}
rotate9() {
  this.state10 = (this.state10 === 'default' ? 'rotated' : 'default');
}
 rotate10() {
  this.state11 = (this.state11 === 'default' ? 'rotated' : 'default');
}
rotate11() {
  this.state12 = (this.state12 === 'default' ? 'rotated' : 'default');
}
rotate12() {
  this.state13 = (this.state13 === 'default' ? 'rotated' : 'default');
}
rotate13() {
  this.state14 = (this.state14 === 'default' ? 'rotated' : 'default');
}



  onprofilephotoFileChanged(event) {
     this.profile_photo =<File> event.target.files[0];
     this.profile_photo2 =<File> event.target.files[0];
     console.log(this.profile_photo);
     var reader = new FileReader();
     reader.readAsDataURL(this.profile_photo); 
     reader.onload = (_event) => { 
       this.profile_photo = reader.result;
     } 
  }
  
  onDlscancopyFileChanged(event) {
     this.dl_scan_copy =<File> event.target.files[0];
     this.dl_scan_copy2 =<File> event.target.files[0];
     console.log(this.dl_scan_copy);
     var reader = new FileReader();
     reader.readAsDataURL(this.dl_scan_copy); 
     reader.onload = (_event) => { 
       this.dl_scan_copy = reader.result;
  }
}
  
  onInsuranceimageFileChanged(event) {
     this.insurance_image=<File> event.target.files[0];
     this.insurance_image2=<File> event.target.files[0];
     console.log("upload image",this.insurance_image);
     var reader = new FileReader();
     reader.readAsDataURL(this.insurance_image); 
     reader.onload = (_event) => { 
       this.insurance_image = reader.result;
  }
  }

  onRccardimageFileChanged(event) {
     this.rc_card_image =<File> event.target.files[0];
     this.rc_card_image2 =<File> event.target.files[0];
     console.log(this.rc_card_image);
     var reader = new FileReader();
     reader.readAsDataURL(this.rc_card_image); 
     reader.onload = (_event) => { 
       this.rc_card_image = reader.result;
  }
  }
  
  // onPucimageFileChanged(event) {
  //    this.puc_image =<File> event.target.files[0];
  //    this.puc_image2 =<File> event.target.files[0];
  //    console.log(this.puc_image);
  //    var reader = new FileReader();
  //    reader.readAsDataURL(this.puc_image); 
  //    reader.onload = (_event) => { 
  //      this.puc_image = reader.result;
  // }
  // }

  
 
  onDriveraadharcardFileChanged(event) {
     this.driver_aadhar_card =<File> event.target.files[0];
     this.driver_aadhar_card2 =<File> event.target.files[0];
     console.log( this.driver_aadhar_card);
     var reader = new FileReader();
     reader.readAsDataURL( this.driver_aadhar_card); 
     reader.onload = (_event) => { 
       this.driver_aadhar_card = reader.result;
  }
}

// onPermitimageFileChanged(event) {
//      this.permit_image =<File> event.target.files[0];
//      this.permit_image2 =<File> event.target.files[0];
//      console.log( this.permit_image);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.permit_image); 
//      reader.onload = (_event) => { 
//        this.permit_image = reader.result;
//   }
// }

onDriverpancardFileChanged(event) {
     this.driver_pan_card =<File> event.target.files[0];
     this.driver_pan_card2 =<File> event.target.files[0];
     console.log( this.driver_pan_card);
     var reader = new FileReader();
     reader.readAsDataURL( this.driver_pan_card); 
     reader.onload = (_event) => { 
       this.driver_pan_card = reader.result;
  }
}

onCancelledchequeimageFileChanged(event) {
     this.cancelled_cheque_image =<File> event.target.files[0];
     this.cancelled_cheque_image2 =<File> event.target.files[0];
     console.log( this.cancelled_cheque_image);
     var reader = new FileReader();
     reader.readAsDataURL( this.cancelled_cheque_image); 
     reader.onload = (_event) => { 
       this.cancelled_cheque_image = reader.result;
  }
}

onOwneraadharcardFileChanged(event) {
     this.owner_aadhar_card =<File> event.target.files[0];
     this.owner_aadhar_card2 =<File> event.target.files[0];
     console.log( this.owner_aadhar_card);
     var reader = new FileReader();
     reader.readAsDataURL( this.owner_aadhar_card); 
     reader.onload = (_event) => { 
       this.owner_aadhar_card = reader.result;
  }
}

// onVehiclephotofrontFileChanged(event) {
//      this.vehicle_photo_front =<File> event.target.files[0];
//      this.vehicle_photo_front2 =<File> event.target.files[0];
//      console.log( this.vehicle_photo_front);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.vehicle_photo_front); 
//      reader.onload = (_event) => { 
//        this.vehicle_photo_front = reader.result;
//   }
// }

// onVehiclephotobackFileChanged(event) {
//      this.vehicle_photo_back =<File> event.target.files[0];
//      this.vehicle_photo_back2 =<File> event.target.files[0];
//      console.log( this.vehicle_photo_back);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.vehicle_photo_back); 
//      reader.onload = (_event) => { 
//        this.vehicle_photo_back = reader.result;
//   }
// }

// onVehiclephotorightFileChanged(event) {
//      this.vehicle_photo_right =<File> event.target.files[0];
//      this.vehicle_photo_right2 =<File> event.target.files[0];
//      console.log( this.vehicle_photo_right);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.vehicle_photo_right); 
//      reader.onload = (_event) => { 
//        this.vehicle_photo_right = reader.result;
//   }
// }


// onVehiclephotoleftFile(event) {
//      this.vehicle_photo_left =<File> event.target.files[0];
//      this.vehicle_photo_left2 =<File> event.target.files[0];
//      console.log( this.vehicle_photo_left);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.vehicle_photo_left); 
//      reader.onload = (_event) => { 
//        this.vehicle_photo_left = reader.result;
//   }
// }
name:any;
driver_name: string ='';
email:string='';
phone1:string='';
alternate_contact_num1:string='';
emergency_contact_num1:string='';
driver_address1:string ='';
driver_city1:string ='';
driver_state1:string ='';
driver_zip1:string='';
vehicle_number1:string='';
work_preference1:string='';
namea:string='';
contact_numbera:string='';
nameb:string='';
contact_numberb:string='';
category1:string='';
badge1:string=''; 
badge_val:string=''; 
vehicle_registered_owner1:string='';
manufacturer1:string='';
class:string='';
model1:string='';
color1:string='';
body_asper_RC1:string='';
gvw_in_kg1:string='';
unladen_weight1:string='';
seating_capacity1:string='';
regn_date1:string='';
fc_val1:string='';
road_tax_val1:string='';
body_type1:string='';
permit_val1:string='';
bank_name1:string='';
account_no1:string='';
IFSC_code1:string='';
type_of_account1:string='';

namec:string='';
contact_numberc:string='';
named:string='';
contact_numberd:string='';
dl_expiry_date1:string ='';
badge_val1:string='';
regn_date:string='';
fc_val:string='';
permit_val:string='';
active1:string='';
owner_name:string='';
owner_phone:string='';
address1:string='';
city:string='';
state:string='';
zip:string='';
owner_cum_driver:any;
ownerstatus="No";



  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute,public dialogRef: MatDialogRef<FourActiveDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) { 
  console.log("my data",data)
 
   this.phone=data;
   //  this.driverfour_owner = data1
   //  this.driverfour_owner = data2
    

  }


//   accounts=[
//    {id : "Savings",  name:"Savings"},
//    {id :"Current" ,name:"Current"},
//    ]

// accountss=[
// {id : "Yes",  name:"Yes"},
// {id :"No" ,name:"No"},
// ]


// accountsss=[
// {id : "OPEN",  name:"OPEN"},
// {id :"COVERED" ,name:"COVERED"},
// {id :"CONTAINER" ,name:"CONTAINER"}
// ]



checkValue(event,dvname,phone,address,city,state,zip,namec,contact_numberc,named,contact_numberd){
if(event.target.checked)
{
   this.ownerstatus="Yes";
   console.log("event"+ this.owner_cum_driver);
    console.log("Yes")
    this.owner_name=dvname;
    console.log( this.owner_name);
    this.owner_phone=phone;
    this.address1=address
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.namec=namec;
    this.contact_numberc=contact_numberc;
    this.named=named;
    this.contact_numberd=contact_numberd;
    console.log( this.owner_phone);
}

else { 
   this.ownerstatus="No";
   console.log("event"+ this.owner_cum_driver);
   this.owner_name="";
   this.owner_phone="";
   this.address1="";
   this.city="";
   this.state="";
   this.zip="";
   this.namec="";
   this.contact_numberc="";
   this.named="";
   this.contact_numberd="";

   console.log("No")
}

}

  ngOnInit() {
   let resp = this.http.get("https://apis.zeigerapp.in/api/driver-registration/driveract-four?phone="+this.phone);
   resp.subscribe((data:any)=>{
   this.user=data
   this.driver_name =data['driver_name']
   this.email=data['email']
   this.phone=data['phone']
   this.alternate_contact_num=data['alternate_contact_num']
   this.emergency_contact_num=data['emergency_contact_num']
   this.vehicle_number = data['vehicle_number']
   this.work_preference=data['work_preference']
   this.driver_address1=data['driver_address']
   this.driver_city=data['driver_city']
   this.driver_state=data['driver_state']
   this.driver_zip=data['driver_zip']
   this.category=data['category']
   this.badge=data['badge']
   this.vehicle_registered_owner=data['vehicle_registered_owner']
   this.manufacturer=data['manufacturer']
   this.class1=data['class']
   this.model=data['model']
   this.color=data['color']
   this.gvw_in_kg=data['gvw_in_kg']
   this.body_asper_RC=data['body_asper_RC']
   this.unladen_weight=data['unladen_weight']
   this.seating_capacity=data['seating_capacity']
   this.registered_time=data['registered_time']
   this.registered_time1 = new Date(this.registered_time).toString().slice(0,-39);
   this.fc_val=data['fc_val']
   this.fc_val1 = new Date(this.fc_val).toString().slice(0,-39);
   this.road_tax_val=data['road_tax_val']
   this.road_tax_val1 = new Date(this.road_tax_val).toString().slice(0,-39);
   this.dl_expiry_date=data['dl_expiry_date']
   this.dl_expiry_date1 = new Date(this.dl_expiry_date).toString().slice(0,-39);
   this.permit_val=data['permit_val']
   this.permit_val1 = new Date(this.permit_val).toString().slice(0,-39);
   this.badge_val=data['badge_val']
   this.badge_val1 = new Date(this.badge_val).toString().slice(0,-39);
   this.owner_name=data['owner_name']
   this.owner_phone=data['owner_phone']
    this.body_type=data['body_type']
    this.will_accept_to_work_for_below_category=data['will_accept_to_work_for_below_category']
   console.log('permit',this.permit_val);
   
   
   console.log(this.cancelled_cheque_image)
    this.dl_scan_copy='https://apis.zeigerapp.in/'+data['dl_scan_copy']
    this.dl_scan_copy2 = new File([this.dl_scan_copy],"dlscan.jpg",{type:"image/jpeg"});

    this.driver_pan_card='https://apis.zeigerapp.in/'+data['driver_pan_card']
    this.driver_pan_card2 = new File([this.driver_pan_card],"drivpan.jpg",{type:"image/jpeg"});

      this.driver_aadhar_card='https://apis.zeigerapp.in/'+data['driver_aadhar_card']
     this.driver_aadhar_card2 = new File([this.driver_aadhar_card],"derivaadh.jpg",{type:"image/jpeg"});


    this.insurance_image='https://apis.zeigerapp.in/'+data['insurance_image']
    this.insurance_image2 = new File([this.insurance_image],"insur.jpg",{type:"image/jpeg"});

    this.owner_aadhar_card='https://apis.zeigerapp.in/'+data['owner_aadhar_card']
    this.owner_aadhar_card2 = new File([this.owner_aadhar_card],"owneraddh.jpg",{type:"image/jpeg"});

    // this.permit_image='https://apis.zeiger.tech/'+data['permit_image']
    // this.permit_image2 = new File([this.permit_image],"perm.jpg",{type:"image/jpeg"});

    this.profile_photo='https://apis.zeigerapp.in/'+data['profile_photo']
    this.profile_photo2 = new File([this.profile_photo],"profile.jpg",{type:"image/jpeg"});
    console.log("blob image",this.profile_photo2)
  
    // this.puc_image='https://apis.zeiger.tech/'+data['puc_image']
    // this.puc_image2 = new File([this.puc_image],"puc.jpg",{type:"image/jpeg"});

    this.rc_card_image='https://apis.zeigerapp.in/'+data['rc_card_image']
    this.rc_card_image2 = new File([this.rc_card_image],"rc.jpg",{type:"image/jpeg"});

    this.cancelled_cheque_image='https://apis.zeigerapp.in/'+data['cancelled_cheque_image']
    this.cancelled_cheque_image2 = new File([this.cancelled_cheque_image],"cancel.jpg",{type:"image/jpeg"});

    // this.vehicle_photo_front='https://apis.zeiger.tech/'+data['vehicle_photo_front']
    // this.vehicle_photo_front2 = new File([this.vehicle_photo_front],"front.jpg",{type:"image/jpeg"});

    // this.vehicle_photo_back='https://apis.zeiger.tech/'+data['vehicle_photo_back']
    // this.vehicle_photo_back2 = new File([this.vehicle_photo_back],"back.jpg",{type:"image/jpeg"});

    // this.vehicle_photo_left='https://apis.zeiger.tech/'+data['vehicle_photo_left']
    // this.vehicle_photo_left2 = new File([this.vehicle_photo_left],"left.jpg",{type:"image/jpeg"});

    // this.vehicle_photo_right='https://apis.zeiger.tech/'+data['vehicle_photo_right']
    // this.vehicle_photo_right2 = new File([this.vehicle_photo_right],"right.jpg",{type:"image/jpeg"});
   console.log("regdta is ",this.user)

   this.namea=data.driver_reference_one.name
   this.contact_numbera=data.driver_reference_one.contact_number
   this.contact_numberb=data.driver_reference_two.contact_number
   this.nameb=data.driver_reference_two.name
   this.bank_name=data.bank_details.bank_name
        this.account_no=data.bank_details.account_no
        this.IFSC_code=data.bank_details.IFSC_code
        this.type_of_account=data.bank_details.type_of_account
        this.contact_numberd=data.reference_two.contact_number
        this.named=data.reference_two.name
        this.namec=data.reference_one.name
        this.contact_numberc=data.reference_one.contact_number
        this.address1=data.owner_address.address1
        this.city=data.owner_address.city
        this.state=data.owner_address.state
        this.zip=data.owner_address.zip
   });
   
  }
  // onDriver(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,alternate_contact_num,
  //  emergency_contact_num,vehicle_number,badge,vehicle_registered_owner,category,model,gvw_in_kg,body_asper_RC,
  //  unladen_weight,seating_capacity,road_tax_val,registered_time,fc_val,dl_expiry_date,permit_val,badge_val,manufacturer,class1,color,
  //  namea,contact_numbera,nameb,contact_numberb,namec,contact_numberc,named,contact_numberd,work_preference,
  //  body_type,will_accept_to_work_for_below_category,bank_name,account_no,IFSC_code,type_of_account,owner_name,owner_phone,address1,city,state,zip,active){
   
  //     if( this.driver_name==""){
         
  //       alert("Please Enter drivername"); 
  //     }
      
  //   else if(this.email==""){
  //        alert("Please Enter Email"); 
 
  //      }
  //     //  else if(this.email!=="/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/"){
  //     //    alert("Please enter Valid Email"); 
 
  //     //  }

    
  //     else{
      
  //                    this.driver_name=driver_name;
  //                    this.email=email;
  //                    this.phone1=phone;
  //                    this.driver_address1= driver_address;
  //                    this.driver_city1= driver_city;
  //                    this.driver_state1=driver_state;
  //                    this.driver_zip1=driver_zip;
  //                    this.vehicle_number1=vehicle_number;
  //                    this.alternate_contact_num1=alternate_contact_num;
  //                    this.emergency_contact_num1=emergency_contact_num;
  //                    this.namea=namea;
  //                    this.contact_numbera=contact_numbera;
  //                    this.nameb=nameb;
  //                    this.category1=category;
  //                    this.contact_numberb=contact_numberb;
  //                    this.badge1=badge;
  //                    this.vehicle_registered_owner1=vehicle_registered_owner;
  //                    this.manufacturer1=manufacturer;
  //                    this.class=class1;
  //                    this.model1=model;
  //                    this.color1=color;
  //                    this.gvw_in_kg1=gvw_in_kg;
  //                    this.body_asper_RC1=body_asper_RC;
  //                    this.unladen_weight1=unladen_weight;
  //                    this.seating_capacity1=seating_capacity;
  //                    this.registered_time=registered_time;
  //                    this.fc_val1=fc_val;
  //                    this.road_tax_val1=road_tax_val;
  //                    this.dl_expiry_date1=dl_expiry_date;
  //                    this.permit_val1=permit_val;
  //                    this.badge_val1=badge_val;
  //                    this.bank_name1=bank_name;
  //                    this.account_no1=account_no;
  //                    this.IFSC_code1=IFSC_code;
  //                    this.type_of_account1=type_of_account;
  //                    this.namec=namec;
  //                    this.contact_numberc=contact_numberc;
  //                    this.named=named;
  //                    this.contact_numberd=contact_numberd;
  //                    this.active1=active;
  //                    this.owner_name=owner_name;
  //                    this.owner_phone=owner_phone;
  //                    this.address1=address1;
  //                    this.city=city;
  //                    this.state=state;
  //                    this.zip=zip;
  //                    this.will_accept_to_work_for_below_category=this.will_accept_to_work_for_below_category;
  //                    this.owner_cum_driver=this.ownerstatus;
  //                    this.work_preference1=work_preference;
  //                    this.body_type1=body_type;
  //                    this.profile_photo=this.profile_photo2;
  //                    this.dl_scan_copy=this.dl_scan_copy2;
  //                    this.driver_pan_card=this.driver_pan_card2;
  //                     // this.driver_aadhar_card=this.driver_aadhar_card2;
  //                    this.rc_card_image=this.rc_card_image2;
  //                    this.permit_image=this.permit_image2;
  //                    this.insurance_image=this.insurance_image2;
  //                    this.puc_image=this.puc_image2;
  //                    this.owner_aadhar_card=this.owner_aadhar_card2;
  //                    this.cancelled_cheque_image=this.cancelled_cheque_image2;
  //                    this.vehicle_photo_front=this.vehicle_photo_front2;
  //                    this.vehicle_photo_back=this.vehicle_photo_back2;
  //                    this.vehicle_photo_right=this.vehicle_photo_right2;
  //                    this.vehicle_photo_left=this.vehicle_photo_left2;


                     
  //                 const fd = new FormData();  
  //                 // fd.append('driver_uuid', this.driver_uuid1);
  //                 // fd.append('vendor_uuid', this.vendor_uuid1);
  //                 fd.append('driver_name', this.driver_name);
  //                 fd.append('email', this.email);
  //                 fd.append('phone', this.phone1);
  //                 fd.append('driver_address', this.driver_address1);
  //                 fd.append('driver_city', this.driver_city1);
  //                 fd.append('driver_state', this.driver_state1);
  //                 fd.append('driver_zip', this.driver_zip1);
  //                 fd.append('alternate_contact_num',this.alternate_contact_num1)
  //                 fd.append('emergency_contact_num',this.emergency_contact_num1)
  //                 fd.append('badge',this.badge1);
  //                 fd.append('body_asper_RC',this.body_asper_RC1);
  //                 fd.append('vehicle_registered_owner',this.vehicle_registered_owner1);
  //                 fd.append('model',this.model1);
  //                 fd.append('permit_val',this.permit_val1);
  //                 fd.append('badge_val',this.badge_val1);
  //                 fd.append('driver_reference_one[name]',this.namea);
  //                 fd.append('driver_reference_one[contact_number]',this.contact_numbera);
  //                 fd.append('driver_reference_two[name]',this.nameb);
  //                 fd.append('driver_reference_two[contact_number]',this.contact_numberb);
  //                  fd.append('profile_photo',this.profile_photo);
  //                  fd.append('dl_scan_copy',this.dl_scan_copy);
  //                 fd.append('vehicle_number',this.vehicle_number1);
  //                  fd.append('driver_pan_card',this.driver_pan_card);
  //                 // fd.append('driver_aadhar_card',this.driver_aadhar_card);
  //                 fd.append('rc_card_image',this.rc_card_image);
  //                  fd.append('permit_image', this.permit_image);
  //                  fd.append('insurance_image',this.insurance_image);
  //                  fd.append('puc_image',this.puc_image);
  //                  fd.append('owner_aadhar_card',this.owner_aadhar_card);
  //                  fd.append('cancelled_cheque_image',this.cancelled_cheque_image);
  //                  fd.append('vehicle_photo_front',this.vehicle_photo_front);
  //                  fd.append('vehicle_photo_back',this.vehicle_photo_back);
  //                  fd.append('vehicle_photo_right',this.vehicle_photo_right);
  //                  fd.append('vehicle_photo_left',this.vehicle_photo_left);
  //                 fd.append('dl_expiry_date',this.dl_expiry_date1);
  //                 fd.append('fc_val',this.fc_val1);
  //                 fd.append('registered_time', this.registered_time);
  //                 fd.append('manufacturer',this.manufacturer1);
  //                 fd.append('class',this.class);
  //                 fd.append('color',this.color1);
  //                 fd.append('gvw_in_kg',this.gvw_in_kg1);
  //                 fd.append('unladen_weight',this.unladen_weight1);
  //                 fd.append('category',this.category1);
  //                 fd.append('seating_capacity',this.seating_capacity1);
  //                 fd.append('road_tax_val',this.road_tax_val1);
  //                 fd.append('owner_name',this.owner_name);
  //                 fd.append('owner_phone',this.owner_phone);
  //                 fd.append('owner_address[address1]',this.address1);
  //                 fd.append('owner_address[city]',this.city);
  //                 fd.append('owner_address[state]',this.state);
  //                 fd.append('owner_address[zip]',this.zip);
  //                 fd.append('reference_one[name]',this.namec);
  //                 fd.append('reference_one[contact_number]',this.contact_numberc);
  //                 fd.append('reference_two[name]',this.named);
  //                 fd.append('reference_two[contact_number]',this.contact_numberd);
  //                 fd.append('bank_details[bank_name]',this.bank_name1);
  //                 fd.append('bank_details[account_no]',this.account_no1);
  //                 fd.append('bank_details[IFSC_code]',this.IFSC_code1);
  //                 fd.append('bank_details[type_of_account]',this.type_of_account1);
  //                 fd.append('owner_cum_driver',this.owner_cum_driver);
  //                 fd.append('body_type',this.body_type1);
  //                 fd.append('work_preference',this.work_preference1)
  //                 fd.append('will_accept_to_work_for_below_category',this.will_accept_to_work_for_below_category);
  //                 fd.append('active', this.active1);
    
  //                     this.http.post('http://165.22.219.195:2390/api/1.0/driver-registration',fd)

  //                     .subscribe((data:any)=>{
                        
  //                    console.log('posting data',data);

  //                     alert("successfully Registered");

  //                    },(error:HttpErrorResponse)=>{
  //                       alert("Unable to Register");
  //                    });
                  
            
  //     }

  // }


 

 

  

  // // When the user clicks the action button a.k.a. the logout button in the\
  // // modal, show an alert and followed by the closing of the modal
  // actionFunction() {
  //   alert("You Have Successfully Updated Your Profile.!");
  //   this.closeModal();
  // }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }
  

}


