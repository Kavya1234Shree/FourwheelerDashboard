import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


// import { UserInfo } from 'os';


@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.scss'],
//   animations: [
//     // Each unique animation requires its own trigger. The first argument of the trigger function is the name
//     trigger('rotatedState', [
//       state('default', style({ transform: 'rotate(0)' })),
//       state('rotated', style({ transform: 'rotate(90deg)' })),
//       //  state('default', style({ transform: 'rotate1(0)' })),
//       //  state('rotated', style({ transform: 'rotate1(90deg)' })),
//       //  state('rotated', style({ transform: 'rotate(-90deg)' })),
//       transition('rotated => default', animate('1500ms ease-out')),
//       transition('default => rotated', animate('400ms ease-in'))
//   ])
// ]
})
export class CancelDialogComponent implements OnInit {
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
delivery_address:any;
  order_time1: string;
  accepted_time1: string;


  // work_preference:any[];
  // packingList: string[] = ['ONLY LOCAL', 'LOCAL & OUTSTATION', 'OUTSTATION'];
 
//  shown= false;
//  phone:any;
//  user:any;
//  vehicle_number:any;

//  alternate_contact_num:any;
//  emergency_contact_num:any;
//  driver_city:any;
//  driver_state:any;
//  driver_zip:any;
//  category:any;
//  badge:any;
//  vehicle_registered_owner:any;
//  manufacturer:any;
//  class1:any;
//  model:any;
//  color:any;
//  gvw_in_kg:any;
//  body_asper_RC:any;
//  unladen_weight:any;
//  seating_capacity:any;
//  road_tax_val:any;
//  dl_expiry_date:any;
//  bank_name:any;
//  account_no:any;
//  IFSC_code:any;
//  type_of_account:any;
//  body_type:any;
//  cancelled_cheque_image:any;
//  cancelled_cheque_image2:any;
//  dl_scan_copy:any;
//  dl_scan_copy2:any;
//  driver_pan_card:any;
//  driver_pan_card2:any;
//  insurance_image:any;
//  insurance_image2:any;
//  owner_aadhar_card:any;
//  owner_aadhar_card2:any;
//  permit_image:any;
//  permit_image2:any;
//  profile_photo:any;
//  profile_photo2:any;
//  puc_image:any;
//  puc_image2:any;
//  rc_card_image:any;
//  rc_card_image2:any;
//  vehicle_photo_front:any;
//  vehicle_photo_front2:any;
//  vehicle_photo_back:any;
//  vehicle_photo_back2:any;
//  vehicle_photo_left:any;
//  vehicle_photo_left2:any;
//  vehicle_photo_right:any;
//  vehicle_photo_right2:any;
//  driver_aadhar_card :any;
//  driver_aadhar_card2 :any;

//  state1: string = 'default';
//  state2:string='default';
//  state3:string='default';
//  state4:string='default';
//  state5:string='default';
//  state6:string='default';
//  state7:string='default';
//  state8:string='default';
//  state9:string='default';
//  state10:string='default';
//  state11:string='default';
//  state12:string='default';
//  state13:string='default';
//  state14:string='default';
//  rotate() {
//      this.state1 = (this.state1 === 'default' ? 'rotated' : 'default');
//  }
//  rotate1() {
//   this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
// }
// rotate2() {
//   this.state3 = (this.state3 === 'default' ? 'rotated' : 'default');
// }

// rotate3() {
//   this.state4 = (this.state4 === 'default' ? 'rotated' : 'default');
// }
// rotate4() {
//   this.state5 = (this.state5 === 'default' ? 'rotated' : 'default');
// }
// rotate5() {
//   this.state6 = (this.state6 === 'default' ? 'rotated' : 'default');
// }
// rotate6() {
//   this.state7 = (this.state7 === 'default' ? 'rotated' : 'default');
// }
// rotate7() {
//   this.state8 = (this.state8 === 'default' ? 'rotated' : 'default');
// }
// rotate8() {
//   this.state9 = (this.state9 === 'default' ? 'rotated' : 'default');
// }
// rotate9() {
//   this.state10 = (this.state10 === 'default' ? 'rotated' : 'default');
// }
//  rotate10() {
//   this.state11 = (this.state11 === 'default' ? 'rotated' : 'default');
// }
// rotate11() {
//   this.state12 = (this.state12 === 'default' ? 'rotated' : 'default');
// }
// rotate12() {
//   this.state13 = (this.state13 === 'default' ? 'rotated' : 'default');
// }
// rotate13() {
//   this.state14 = (this.state14 === 'default' ? 'rotated' : 'default');
// }



//   onprofilephotoFileChanged(event) {
//      this.profile_photo =<File> event.target.files[0];
//      this.profile_photo2 =<File> event.target.files[0];
//      console.log(this.profile_photo);
//      var reader = new FileReader();
//      reader.readAsDataURL(this.profile_photo); 
//      reader.onload = (_event) => { 
//        this.profile_photo = reader.result;
//      } 
//   }
  
//   onDlscancopyFileChanged(event) {
//      this.dl_scan_copy =<File> event.target.files[0];
//      this.dl_scan_copy2 =<File> event.target.files[0];
//      console.log(this.dl_scan_copy);
//      var reader = new FileReader();
//      reader.readAsDataURL(this.dl_scan_copy); 
//      reader.onload = (_event) => { 
//        this.dl_scan_copy = reader.result;
//   }
// }
  
//   onInsuranceimageFileChanged(event) {
//      this.insurance_image=<File> event.target.files[0];
//      this.insurance_image2=<File> event.target.files[0];
//      console.log("upload image",this.insurance_image);
//      var reader = new FileReader();
//      reader.readAsDataURL(this.insurance_image); 
//      reader.onload = (_event) => { 
//        this.insurance_image = reader.result;
//   }
//   }

//   onRccardimageFileChanged(event) {
//      this.rc_card_image =<File> event.target.files[0];
//      this.rc_card_image2 =<File> event.target.files[0];
//      console.log(this.rc_card_image);
//      var reader = new FileReader();
//      reader.readAsDataURL(this.rc_card_image); 
//      reader.onload = (_event) => { 
//        this.rc_card_image = reader.result;
//   }
//   }
  
//   onPucimageFileChanged(event) {
//      this.puc_image =<File> event.target.files[0];
//      this.puc_image2 =<File> event.target.files[0];
//      console.log(this.puc_image);
//      var reader = new FileReader();
//      reader.readAsDataURL(this.puc_image); 
//      reader.onload = (_event) => { 
//        this.puc_image = reader.result;
//   }
//   }

  
 
//   onDriveraadharcardFileChanged(event) {
//      this.driver_aadhar_card =<File> event.target.files[0];
//      this.driver_aadhar_card2 =<File> event.target.files[0];
//      console.log( this.driver_aadhar_card);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.driver_aadhar_card); 
//      reader.onload = (_event) => { 
//        this.driver_aadhar_card = reader.result;
//   }
// }

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

// onDriverpancardFileChanged(event) {
//      this.driver_pan_card =<File> event.target.files[0];
//      this.driver_pan_card2 =<File> event.target.files[0];
//      console.log( this.driver_pan_card);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.driver_pan_card); 
//      reader.onload = (_event) => { 
//        this.driver_pan_card = reader.result;
//   }
// }

// onCancelledchequeimageFileChanged(event) {
//      this.cancelled_cheque_image =<File> event.target.files[0];
//      this.cancelled_cheque_image2 =<File> event.target.files[0];
//      console.log( this.cancelled_cheque_image);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.cancelled_cheque_image); 
//      reader.onload = (_event) => { 
//        this.cancelled_cheque_image = reader.result;
//   }
// }

// onOwneraadharcardFileChanged(event) {
//      this.owner_aadhar_card =<File> event.target.files[0];
//      this.owner_aadhar_card2 =<File> event.target.files[0];
//      console.log( this.owner_aadhar_card);
//      var reader = new FileReader();
//      reader.readAsDataURL( this.owner_aadhar_card); 
//      reader.onload = (_event) => { 
//        this.owner_aadhar_card = reader.result;
//   }
// }

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


//   selectedFile: File = null;
//   onFileChanged(event) {
//      this.selectedFile =<File> event.target.files[0];
//   }
//   dlscancopyFile: File = null;
//   onDlscancopyFileChanged(event) {
//      this.dlscancopyFile =<File> event.target.files[0];
//   }
//   insuranceimageFile: File = null;
//   onInsuranceimageFileChanged(event) {
//      this.insuranceimageFile=<File> event.target.files[0];
//   }

// rccardimageFile: File = null;
//   onRccardimageFileChanged(event) {
//      this.rccardimageFile =<File> event.target.files[0];
//   }
//   pucimageFile: File = null;
//   onPucimageFileChanged(event) {
//      this.pucimageFile =<File> event.target.files[0];
//   }
//   permitimageFile: File = null;
//   onPermitimageFileChanged(event) {
//      this.permitimageFile =<File> event.target.files[0];
//   }
//   driverpancardFile: File = null;
//   onDriverpancardFileChanged(event) {
//      this.driverpancardFile =<File> event.target.files[0];
//   }
  // driveraadharcardFile: File = null;
  // onDriveraadharcardFileChanged(event) {
  //    this.driveraadharcardFile =<File> event.target.files[0];
  // }
//   cancelledchequeimageFile: File = null;
//   onCancelledchequeimageFileChanged(event) {
//      this.cancelledchequeimageFile =<File> event.target.files[0];
//   }

// owneraadharcardFile: File = null;
//   onOwneraadharcardFileChanged(event) {
//      this.owneraadharcardFile =<File> event.target.files[0];
//   }
//   vehiclephotofrontFile: File = null;
//   onVehiclephotofrontFileChanged(event) {
//      this.vehiclephotofrontFile =<File> event.target.files[0];
//   }

//   vehiclephotobackFile: File = null;
//   onVehiclephotobackFileChanged(event) {
//      this.vehiclephotobackFile =<File> event.target.files[0];
//   }

//   vehiclephotorightFile: File = null;
//   onVehiclephotorightFileChanged(event) {
//      this.vehiclephotorightFile =<File> event.target.files[0];
//   }

//   vehiclephotoleftFile: File = null;
//   onVehiclephotoleftFileChanged(event) {
//      this.vehiclephotoleftFile =<File> event.target.files[0];
//   }




// body_asper_RC1:string='';
// gvw_in_kg1:string='';
// unladen_weight1:string='';
// seating_capacity1:string='';
// regn_date1:string='';
// fc_val1:string='';
// road_tax_val1:string='';
// body_type1:string='';
// permit_val1:string='';
// bank_name1:string='';
// account_no1:string='';
// IFSC_code1:string='';
// type_of_account1:string='';
// will_accept_to_work_for_below_categor1:string='';
// namec:string='';
// contact_numberc:string='';
// named:string='';
// contact_numberd:string='';
// dl_expiry_date1:string ='';
// badge_val1:string='';
// regn_date:string='';
// fc_val:string='';
// permit_val:string='';
// active1:string='';
// owner_name:string='';
// owner_phone:string='';
// address1:string='';
// city:string='';
// state:string='';
// zip:string='';
// owner_cum_driver:any;
// ownerstatus="No";


  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute,public dialogRef: MatDialogRef<CancelDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log("my data",data)
 
   this.trans_uuid=data;
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



// checkValue(event,dvname,phone,address,city,state,zip,namec,contact_numberc,named,contact_numberd){
// if(event.target.checked)
// {
//    this.ownerstatus="Yes";
//    console.log("event"+ this.owner_cum_driver);
//     console.log("Yes")
//     this.owner_name=dvname;
//     console.log( this.owner_name);
//     this.owner_phone=phone;
//     this.address1=address
//     this.city=city;
//     this.state=state;
//     this.zip=zip;
//     this.namec=namec;
//     this.contact_numberc=contact_numberc;
//     this.named=named;
//     this.contact_numberd=contact_numberd;
//     console.log( this.owner_phone);
// }

// else { 
//    this.ownerstatus="No";
//    console.log("event"+ this.owner_cum_driver);
//    this.owner_name="";
//    this.owner_phone="";
//    this.address1="";
//    this.city="";
//    this.state="";
//    this.zip="";
//    this.namec="";
//    this.contact_numberc="";
//    this.named="";
//    this.contact_numberd="";

//    console.log("No")
// }



  ngOnInit() {
    
   let resp = this.http.get("https://apis.zeiger.tech/api/cancel-book/id?trans_uuid="+this.trans_uuid);
   resp.subscribe((data:any)=>{
   this.user=data;
   console.log( 'data : ',this.user);
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
   this.trans_uuid=data['trans_uuid']
   this.status=data['status']
   
   this.name=data.contact_person.name
  console.log("Name",this.name)
   this.phone= data.contact_person.phone
   this.address= data.delivery_address.address
   this.landmark=data.delivery_address.landmark
 

   });
  }
  
  //  this.color=data['color']
  //  this.gvw_in_kg=data['gvw_in_kg']
  //  this.body_asper_RC=data['body_asper_RC']
  //  this.unladen_weight=data['unladen_weight']
  //  this.seating_capacity=data['seating_capacity']
  //  this.regn_date=data['regn_date']
  //  this.fc_val=data['fc_val']
  //  this.road_tax_val=data['road_tax_val']
  //  this.dl_expiry_date=data['dl_expiry_date']
  //  this.permit_val=data['permit_val']
  //  this.badge_val=data['badge_val']
  //  this.bank_name=data['bank_name']
  //  this.account_no=data['account_no']
  //  this.IFSC_code=data['IFSC_code']
  //  this.type_of_account=data['type_of_account']
  //  this.contact_numberc=data['contact_numberc']
  //  this.named=data['named']
  //  this.contact_numberd=data['contact_numberd']
  //  this.owner_name=data['owner_name']
  //  this.owner_phone=data['owner_phone']
  //  this.address1=data['address1']
  //  this.city=data['city']
  //  this.state=data['state']
  //  this.zip=data['zip']
  //  this.body_type=data['body_type']
   
  //  console.log(this.cancelled_cheque_image)
  //   this.dl_scan_copy='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['dl_scan_copy']
  //   this.dl_scan_copy2 = new File([this.dl_scan_copy],"dlscan.jpg",{type:"image/jpeg"});

  //   this.driver_pan_card='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['driver_pan_card']
  //   this.driver_pan_card2 = new File([this.driver_pan_card],"drivpan.jpg",{type:"image/jpeg"});

  //    this.driver_aadhar_card='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['driver_aadhar_card']
  //    this.driver_aadhar_card2 = new File([this.driver_aadhar_card],"derivaadh.jpg",{type:"image/jpeg"});


  //   this.insurance_image='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['insurance_image']
  //   this.insurance_image2 = new File([this.insurance_image],"insur.jpg",{type:"image/jpeg"});

  //   this.owner_aadhar_card='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['owner_aadhar_card']
  //   this.owner_aadhar_card2 = new File([this.owner_aadhar_card],"owneraddh.jpg",{type:"image/jpeg"});

  //   this.permit_image='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['permit_image']
  //   this.permit_image2 = new File([this.permit_image],"perm.jpg",{type:"image/jpeg"});

  //   this.profile_photo='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['profile_photo']
  //   this.profile_photo2 = new File([this.profile_photo],"profile.jpg",{type:"image/jpeg"});
  //   console.log("blob image",this.profile_photo2)
  
  //   this.puc_image='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['puc_image']
  //   this.puc_image2 = new File([this.puc_image],"puc.jpg",{type:"image/jpeg"});

  //   this.rc_card_image='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['rc_card_image']
  //   this.rc_card_image2 = new File([this.rc_card_image],"rc.jpg",{type:"image/jpeg"});

  //   this.cancelled_cheque_image='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['cancelled_cheque_image']
  //   this.cancelled_cheque_image2 = new File([this.cancelled_cheque_image],"cancel.jpg",{type:"image/jpeg"});

  //   this.vehicle_photo_front='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['vehicle_photo_front']
  //   this.vehicle_photo_front2 = new File([this.vehicle_photo_front],"front.jpg",{type:"image/jpeg"});

  //   this.vehicle_photo_back='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['vehicle_photo_back']
  //   this.vehicle_photo_back2 = new File([this.vehicle_photo_back],"back.jpg",{type:"image/jpeg"});

  //   this.vehicle_photo_left='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['vehicle_photo_left']
  //   this.vehicle_photo_left2 = new File([this.vehicle_photo_left],"left.jpg",{type:"image/jpeg"});

  //   this.vehicle_photo_right='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data['vehicle_photo_right']
  //   this.vehicle_photo_right2 = new File([this.vehicle_photo_right],"right.jpg",{type:"image/jpeg"});
  //  console.log("regdta is ",this.user)
  //  });
   
  // }
  // onDriver(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,alternate_contact_num,
  //  emergency_contact_num,vehicle_number,badge,vehicle_registered_owner,category,model,gvw_in_kg,body_asper_RC,
  //  unladen_weight,seating_capacity,road_tax_val,regn_date,fc_val,dl_expiry_date,permit_val,badge_val,manufacturer,class1,color,
  //  namea,contact_numbera,nameb,contact_numberb,namec,contact_numberc,named,contact_numberd,work_preference,
  //  body_type,will_accept_to_work_for_below_categor,bank_name,account_no,IFSC_code,type_of_account,owner_name,owner_phone,address1,city,state,zip,active){
   
  //     if( this.driver_name==""){
         
  //       alert("Please Enter drivername"); 
  //     }
      
  //     if(this.email==""){
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
  //                    this.regn_date1=regn_date;
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
  //                    this.will_accept_to_work_for_below_categor1=will_accept_to_work_for_below_categor;
  //                    this.owner_cum_driver=this.ownerstatus;
  //                    this.work_preference1=work_preference;
  //                    this.body_type1=body_type;
  //                    this.profile_photo=this.profile_photo2;
  //                    this.dl_scan_copy=this.dl_scan_copy2;
  //                    this.driver_pan_card=this.driver_pan_card2;
  //                     this.driver_aadhar_card=this.driver_aadhar_card2;
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
  //                 fd.append('driver_aadhar_card',this.driver_aadhar_card);
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
  //                 fd.append('regn_date', this.regn_date1);
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
  //                 fd.append('will_accept_to_work_for_below_categor',this.will_accept_to_work_for_below_categor1);
  //                 fd.append('active', this.active1);
    
  //                     this.http.post('http://139.59.16.220/api/1.0/driver-owner',fd)

  //                     .subscribe((data:any)=>{
                        
  //                    console.log(data);

  //                     alert("successfully Registered");

  //                    },(error:HttpErrorResponse)=>{
  //                       alert("successfully Registered");
  //                    });
                  
            
  //     }

  


 

 

  

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  
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
 


