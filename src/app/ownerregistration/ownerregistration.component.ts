import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var cancelled_cheque_image2
var dl_scan_copy2
var driver_pan_card2
var insurance_image2
var owner_aadhar_card2
// var permit_image2
var profile_photo2
// var puc_image2
var rc_card_image2
// var  vehicle_photo_front2
// var vehicle_photo_back2
// var vehicle_photo_left2
// var vehicle_photo_right2
var driver_aadhar_card2

@Component({
  selector: 'app-ownerregistration',
  templateUrl: './ownerregistration.component.html',
  styleUrls: ['./ownerregistration.component.scss']
})
export class OwnerregistrationComponent implements OnInit {
   rotationAmount = 0;
  work_preference: any;
  imagess: any;
  imagessss: any;
  place: any = [];
  imagesss: any;
  user: any;
  registered_time:string;
  vehicle_number: any;
  cancelled_cheque_image: any;
  dl_scan_copy: any;
  insurance_image: any;
  owner_aadhar_card: any;
  permit_image: any;
  profile_photo: any;
  puc_image: any;
  rc_card_image: any;
  vehicle_photo_front: any;
  vehicle_photo_back: any;
  vehicle_photo_left: any;
  vehicle_photo_right: any;
  phone: any;
  owner_phone: any;
  driver_aadhar_card: any;
  driver_pan_card: any;
  _id: any;
  will_accept_to_work_for_below_category: any;
  body_type: any;
  driver_name: any;
  email: any;
  category: any;
  alternate_contact_num: any;
  emergency_contact_num: any;
  driver_address: any;
  driver_city: any;
  driver_state: any;
  driver_zip: any;
  dl_expiry_date: any;
  badge: any;
  badge_val: any;
  vehicle_registered_owner: any;
  manufacturer: any;
  color: any;
  class: any;
  model: any;
  body_asper_RC: any;
  gvw_in_kg: any;
  unladen_weight: any;
  seating_capacity: any;
  regn_date: any;
  fc_val: any;
  road_tax_val: any;
  insurance_val: any;
  permit_val: any;
  owner_name: any;
  owner_address: any;
  owner_cum_driver: any;
  city: any;
  state: any;
  zip: any;
  address1: any;
  name: any;
  contact_number: any;
  bank_name: any;
  account_no: any;
  IFSC_code: any;
  type_of_account: any;
  namea: any;
  nameb: any;
  namec: any;
  named: any;
  contact_numbera: any;
  contact_numberb: any;
  contact_numberc: any;
  contact_numberd: any;
  active: any;

 state1 = 'default';
 state2 = 'default';
 state3 = 'default';
 state4 = 'default';
 state5 = 'default';
 state6 = 'default';
 state7 = 'default';
 state8 = 'default';
 state9 = 'default';
 state10 = 'default';
 state11 = 'default';
 state12 = 'default';
 state13 = 'default';
 state14 = 'default';
 insuranceimageFile: any;
 rccardimageFile: any;
//  pucimageFile: any;
//  permitimageFile: any;
 driverpancardFile: any;
 driveraadharcardFile: any;
 cancelledchequeimageFile: any;
 owneraadharcardFile:  any;
//  vehiclephotofrontFile:  any;
//  vehiclephotobackFile:  any;
//  vehiclephotorightFile:  any;
//  vehiclephotoleftFile: any;
 dlscancopyFile: any;
 profilephotoimageFile: any;
 
  packingList = ['ONLY LOCAL', 'LOCAL & OUTSTATION', 'OUTSTATION'];

  accountss = [
    {id : 'Yes',  name: 'Yes'},
    {id : 'No' , name: 'No'},
    ]

    accountsss=[
      {id : "Piaggio Ape",  name:"Piaggio Ape"},
      {id :"Tata Ace Mini Truck" ,name:"Tata Ace Mini Truck"},
      {id :"Tata Super Ace" ,name:"Tata Super Ace"},
      {id :"Tata 407" ,name:"Tata 407"},
      {id :"Eicher Canter" ,name:"Eicher Canter"}
      ]
    
    accountssss = [
      {id : 'Yes',  name: 'Yes'},
      {id : 'No' , name: 'No'},
      ]
      accounts = [
        {id : 'Savings',  name: 'Savings'},
        {id : 'Current' , name: 'Current'},
        ]
  phone1: any;
  driver_address1: any;
  driver_city1: any;
  driver_state1: any;
  driver_zip1: any;
  vehicle_registered_owner1: any;
  manufacturer1: any;
  model1: any;
  color1: any;
  gvw_in_kg1: any;
  body_asper_RC1: any;
  unladen_weight1: any;
  seating_capacity1: any;
  regn_date1: any;
  fc_val1: any;
  road_tax_val1: any;
  dl_expiry_date1: any;
  permit_val1: any;
  badge_val1: any;
  bank_name1: any;
  account_no1: any;
  IFSC_code1: any;
  type_of_account1: any;
  active1: any;
  ownerstatus: any;
  work_preference1: any;
  body_type1: any;
  vehicle_number1: any;
  category1: any;
  alternate_contact_num1: any;
  emergency_contact_num1: any;
  badge1: any;
  width: any;
  height: any;
 // rotationAmount: any;
  top: number;
  left: number;
  driver_reference_one:any;
  driver_reference_two:any;
  class1:any;
  registered_time1: string;
  




onDlscancopyFileChanged(event) {
  this.dl_scan_copy = <File>event.target.files[0];
  dl_scan_copy2 = <File>event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.dl_scan_copy);
  reader.onload = (_event) => {
    this.dl_scan_copy = reader.result;
  }
}


onInsuranceimageFileChanged(event) {
  this.insurance_image = <File>event.target.files[0];
  insurance_image2 = <File>event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.insurance_image);
   reader.onload = (_event) => {
     this.insurance_image = reader.result;
   }
}

onProfilephotoimageFileChanged(event) {
  this.profile_photo = <File>event.target.files[0];
  profile_photo2 = <File>event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.profile_photo);
  reader.onload = (_event) => {
    this.profile_photo = reader.result;
  }
}


onRccardimageFileChanged(event) {
  this.rc_card_image = <File>event.target.files[0];
  rc_card_image2 = <File>event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.rc_card_image);
   reader.onload = (_event) => {
     this.rc_card_image = reader.result;
   }
}



// onPucimageFileChanged(event) {
//   this.puc_image = <File>event.target.files[0];
//   puc_image2 = <File>event.target.files[0];
//    const reader = new FileReader();
//    reader.readAsDataURL(this.puc_image);
//    reader.onload = (_event) => {
//      this.puc_image = reader.result;
//    }
// }



// onPermitimageFileChanged(event) {
//   this.permit_image = <File>event.target.files[0];
//   permit_image2 = <File>event.target.files[0];
//    const reader = new FileReader();
//    reader.readAsDataURL(this.permit_image);
//    reader.onload = (_event) => {
//      this.permit_image = reader.result;
//    }
// }



onDriverpancardFileChanged(event) {
  this.driver_pan_card = <File>event.target.files[0];
  driver_pan_card2 = <File>event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.driver_pan_card);
   reader.onload = (_event) => {
     this.driver_pan_card = reader.result;
   }
}


onDriveraadharcardFileChanged(event) {
  this.driver_aadhar_card = <File>event.target.files[0];
  driver_aadhar_card2 = <File>event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(this.driver_aadhar_card);
   reader.onload = (_event) => {
     this.driver_aadhar_card = reader.result;
   }
}

onCancelledchequeimageFileChanged(event) {
  this.cancelled_cheque_image = <File>event.target.files[0];
  cancelled_cheque_image2 = <File>event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.cancelled_cheque_image);
  reader.onload = (_event) => {
    this.cancelled_cheque_image = reader.result;
  }
}



onOwneraadharcardFileChanged(event) {
  this.owner_aadhar_card = <File>event.target.files[0];
  owner_aadhar_card2 = <File>event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.owner_aadhar_card);
  reader.onload = (_event) => {
    this.owner_aadhar_card = reader.result;
  }
}

// onVehiclephotofrontFileChanged(event) {
//   this.vehicle_photo_front = <File>event.target.files[0];
//   vehicle_photo_front2 = <File>event.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(this.vehicle_photo_front);
//   reader.onload = (_event) => {
//     this.vehicle_photo_front = reader.result;
//   }
// }


// onVehiclephotobackFileChanged(event) {
//   this.vehicle_photo_back = <File>event.target.files[0];
//   vehicle_photo_back2 = <File>event.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(this.vehicle_photo_back);
//   reader.onload = (_event) => {
//     this.vehicle_photo_back = reader.result;
//   }
// }

// onVehiclephotorightFileChanged(event) {
//   this.vehicle_photo_right = <File>event.target.files[0];
//   vehicle_photo_right2 = <File>event.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(this.vehicle_photo_right);
//   reader.onload = (_event) => {
//     this.vehicle_photo_right = reader.result;
//   }
// }


// onVehiclephotoleftFileChanged(event) {
//   this.vehicle_photo_left = <File>event.target.files[0];
//   vehicle_photo_left2 = <File>event.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(this.vehicle_photo_left);
//   reader.onload = (_event) => {
//     this.vehicle_photo_left = reader.result;
//   }
// }

    // tslint:disable-next-line:max-line-length
    constructor(private httpClient: HttpClient, private router: Router, route: ActivatedRoute,
       public dialogRef: MatDialogRef<OwnerregistrationComponent>, @Inject(MAT_DIALOG_DATA) public data,
       private formBuilder: FormBuilder, private elementRef: ElementRef) {
   console.log('my data', data)

        this.phone = data;

    }
  ngOnInit() {
      const resp = this.httpClient.get('https://apis.zeigerapp.in/api/driverfour/phone?phone='+ this.phone);
      resp.subscribe((data:any) => {

        console.log("data getting",data)
       
       
        this.driver_name =data['driver_name']
        console.log("drivername",this.driver_name);
        this.email=data['email']
        console.log("emal",this.email);
        this.phone=data['phone']
        console.log("phon",this.phone);
        this.alternate_contact_num=data['alternate_contact_num']
        console.log("alternatephon",this.alternate_contact_num);
        this.emergency_contact_num=data['emergency_contact_num']
        console.log("emrgencyphon",this.emergency_contact_num);
        this.vehicle_number = data['vehicle_number']
        console.log("vehiclenum",this.vehicle_number);
        this.work_preference=data['work_preference']
        console.log("workprefrnce",this.work_preference);
        this.driver_address1=data['driver_address']
        console.log("drivaddress",this.driver_address1);
        this.driver_city=data['driver_city']
        console.log("drivcity",this.driver_city);
        this.driver_state=data['driver_state']
        console.log("drivstate",this.driver_state);
        this.driver_zip=data['driver_zip']
        console.log("drivzip",this.driver_zip);
        
        this.category=data['category']
        console.log("catgry",this.category);
       
        this.badge=data['badge']
        console.log("badge",this.badge);
        this.vehicle_registered_owner=data['vehicle_registered_owner']
        console.log("vehicleregownr",this.vehicle_registered_owner);
        this.manufacturer=data['manufacturer']
        console.log("manufatr",this.manufacturer);
        this.class1=data.class
        this.model=data['model']
        console.log("modl",this.model);
        this.color=data['color']
        console.log("colr",this.color);
        this.gvw_in_kg=data['gvw_in_kg']
        console.log("gvw",this.gvw_in_kg);
        this.body_asper_RC=data['body_asper_RC']
        console.log("bodyasprrc",this.body_asper_RC);
        this.unladen_weight=data['unladen_weight']
        console.log("unldnwgt",this.unladen_weight);
        this.seating_capacity=data['seating_capacity']
        console.log("seatngcap",this.seating_capacity);
        this.registered_time=data['registered_time']
        console.log("regtime",this.registered_time);
        this.registered_time1 = new Date(this.registered_time).toString().slice(0,-39);
        this.fc_val=data['fc_val']
        console.log("fcvl",this.fc_val);
        this.fc_val1 = new Date(this.fc_val).toString().slice(0,-39);
        this.road_tax_val=data['road_tax_val']
        console.log("rdtaxvl",this.road_tax_val);
        this.road_tax_val1 = new Date(this.road_tax_val).toString().slice(0,-39);
        this.dl_expiry_date=data['dl_expiry_date']
        console.log("dlexpdt",this.dl_expiry_date);
        this.dl_expiry_date1 = new Date(this.dl_expiry_date).toString().slice(0,-39);
        this.permit_val=data['permit_val']
        console.log("prmtval",this.permit_val);
        this.permit_val1 = new Date(this.permit_val).toString().slice(0,-39);
        this.badge_val=data['badge_val']
        console.log("badval",this.badge_val);
        this.badge_val1 = new Date(this.badge_val).toString().slice(0,-39);
        this.owner_name=data['owner_name']
        console.log("ownrname",this.owner_name);
        this.owner_phone=data['owner_phone']
        console.log("ownrphon",this.owner_phone);
        
       this.will_accept_to_work_for_below_category=data['will_accept_to_work_for_below_category']
       console.log("willaccepttowork",this.will_accept_to_work_for_below_category);
        this.body_type=data['body_type']
        console.log("bdytyp",this.body_type);

        this.dl_scan_copy='https://apis.zeigerapp.in/'+data['dl_scan_copy']
        console.log("dlsacncopy",data['dl_scan_copy']);
        console.log(this.dl_scan_copy);
        // this.dl_scan_copy2 = new File([this.dl_scan_copy],"dlscan.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.dl_scan_copy,'dlscan.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          dl_scan_copy2 = file;
          console.log('gettt ingggggg',dl_scan_copy2)
      })
    
        this.driver_pan_card='https://apis.zeigerapp.in/'+data['driver_pan_card']
        console.log("driverpancard",data['driver_pan_card']);
        console.log(this.driver_pan_card);
        // this.driver_pan_card2 = new File([this.driver_pan_card],"drivpan.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.driver_pan_card,'drivpan.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          driver_pan_card2 = file;
          console.log('gettt ingggggg',driver_pan_card2)
      })
    
        this.driver_aadhar_card='https://apis.zeigerapp.in/'+data['driver_aadhar_card']
        console.log("driveradharcard",data['driver_aadhar_card']);
        console.log(this.driver_aadhar_card);
        //  this.driver_aadhar_card2 = new File([this.driver_aadhar_card],"derivaadh.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.driver_aadhar_card,'derivaadh.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          driver_aadhar_card2 = file;
          console.log('gettt ingggggg',driver_aadhar_card2)
      })
    
    
        this.insurance_image='https://apis.zeigerapp.in/'+data['insurance_image']
        console.log("insurenceimage",data['insurance_image']);
        console.log(this.insurance_image);
        // this.insurance_image2 = new File([this.insurance_image],"insur.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.insurance_image,'insur.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          insurance_image2 = file;
          console.log('gettt ingggggg',insurance_image2)
      })
    
        this.owner_aadhar_card='https://apis.zeigerapp.in/'+data['owner_aadhar_card']
        console.log("owneradharcard",data['owner_aadhar_card']);
        console.log(this.owner_aadhar_card);
        // this.owner_aadhar_card2 = new File([this.owner_aadhar_card],"owneraddh.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.owner_aadhar_card,'owneraddh.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          owner_aadhar_card2 = file;
          console.log('gettt ingggggg',owner_aadhar_card2)
      })
    
      //   this.permit_image='https://apis.zeiger.tech/'+data['permit_image']
      //   console.log("permitimage",data['permit_image']);
      //   console.log(this.permit_image);
      //   // this.permit_image2 = new File([this.permit_image],"perm.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.permit_image,'perm.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff")
      //     console.log(file);
      //     permit_image2 = file;
      //     console.log('gettt ingggggg',permit_image2)
      // })
    
        this.profile_photo='https://apis.zeigerapp.in/'+data['profile_photo']
        console.log("profilephoto",data['profile_photo']);
        console.log(this.profile_photo);
        // this.profile_photo2 = new File([this.profile_photo],"profile.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.profile_photo,'profile.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          profile_photo2 = file;
          console.log('gettt ingggggg',profile_photo2)
      })
        
      
      //   this.puc_image='https://apis.zeiger.tech/'+data['puc_image']
      //   console.log("pucimage",data['puc_image']);
      //   console.log(this.puc_image);
      //   // this.puc_image2 = new File([this.puc_image],"puc.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.puc_image,'puc.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff");
      //     console.log(file);
      //     puc_image2 = file;
      //     console.log('gettt ingggggg',puc_image2)
      // })
      console.log("rcimageimage")
        this.rc_card_image='https://apis.zeigerapp.in/'+data['rc_card_image']
        console.log("rcimage",data['rc_card_image']);
        console.log("rcimage")
        console.log(this.rc_card_image)
        // this.rc_card_image2 = new File([this.rc_card_image],"rc.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.rc_card_image,'rc.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          rc_card_image2 = file;
          console.log('gettt ingggggg',rc_card_image2)
      })
    
        this.cancelled_cheque_image='https://apis.zeigerapp.in/'+data['cancelled_cheque_image']
        console.log("cancelledchequeimage",data['cancelled_cheque_image']);
        console.log(this.cancelled_cheque_image);
        // this.cancelled_cheque_image2 = new File([this.cancelled_cheque_image],"cancel.jpg",{type:"image/jpeg"});
        this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.cancelled_cheque_image,'cancel.png','image/png').then(function(file){
          console.log("ffffffffffffffffff")
          console.log(file);
          cancelled_cheque_image2 = file;
          console.log('gettt ingggggg',cancelled_cheque_image2)
      })
    
      //   this.vehicle_photo_front='https://apis.zeiger.tech/'+data['vehicle_photo_front']
      //   console.log("vehiclephotofront",data['vehicle_photo_front']);
      //   console.log(this.vehicle_photo_front);
      //   // this.vehicle_photo_front2 = new File([this.vehicle_photo_front],"front.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.vehicle_photo_front,'front.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff")
      //     console.log(file);
      //     vehicle_photo_front2 = file;
      //     console.log('gettt ingggggg',vehicle_photo_front2)
      // })
    
      //   this.vehicle_photo_back='https://apis.zeiger.tech/'+data['vehicle_photo_back']
      //   console.log("vehiclephotoback",data['vehicle_photo_back']);
      //   console.log(this.vehicle_photo_back);
      //   // this.vehicle_photo_back2 = new File([this.vehicle_photo_back],"back.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.vehicle_photo_back,'back.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff")
      //     console.log(file);
      //     vehicle_photo_back2 = file;
      //     console.log('gettt ingggggg',vehicle_photo_back2)
      // })
    
      //   this.vehicle_photo_left='https://apis.zeiger.tech/'+data['vehicle_photo_left']
      //   console.log("vehiclephotoleft",data['vehicle_photo_left']);
      //   console.log(this.vehicle_photo_left);
      //   // this.vehicle_photo_left2 = new File([this.vehicle_photo_left],"left.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.vehicle_photo_left,'left.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff")
      //     console.log(file);
      //     vehicle_photo_left2 = file;
      //     console.log('gettt ingggggg',vehicle_photo_left2)
      // })
    
      //   this.vehicle_photo_right='https://apis.zeiger.tech/'+data['vehicle_photo_right']
      //   console.log("vehiclephotoright",data['vehicle_photo_right']);
      //   console.log(this.vehicle_photo_right);
      //   // this.vehicle_photo_right2 = new File([this.vehicle_photo_right],"right.jpg",{type:"image/jpeg"});
      //   this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.vehicle_photo_right,'right.png','image/png').then(function(file){
      //     console.log("ffffffffffffffffff")
      //     console.log(file);
      //     vehicle_photo_right2 = file;
      //     console.log('gettt ingggggg',vehicle_photo_right2)
      // })
    
      console.log('regdta is ', data);

      this.bank_name=data.bank_details.bank_name
        this.account_no=data.bank_details.account_no
        this.IFSC_code=data.bank_details.IFSC_code
        this.type_of_account=data.bank_details.type_of_account
        this.contact_numberd=data.reference_two.contact_number
        this.named=data.reference_two.name
        this.contact_numberb=data.driver_reference_two.contact_number
        this.nameb=data.driver_reference_two.name
        this.namea=data.driver_reference_one.name
        this.contact_numbera=data.driver_reference_one.contact_number
        this.namec=data.reference_one.name
        this.contact_numberc=data.reference_one.contact_number
        this.address1=data.owner_address.address1
        this.city=data.owner_address.city
        this.state=data.owner_address.state
        this.zip=data.owner_address.zip

     })
   }
   closeModal() {
    this.dialogRef.close();
  }
  srcToFile(src, fileName, mimeType){
    return (fetch(src)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], fileName, {type:mimeType});})
    );
  }
  onDriver(driver_name, email, phone, driver_address, driver_city, driver_state, driver_zip, alternate_contact_num,
    emergency_contact_num, vehicle_number, badge, vehicle_registered_owner, category, model, gvw_in_kg, body_asper_RC,
    unladen_weight, seating_capacity, road_tax_val, registered_time, fc_val, dl_expiry_date, permit_val, badge_val, manufacturer, class1, color,
    namea, contact_numbera, nameb, contact_numberb, namec, contact_numberc, named, contact_numberd, work_preference,
    body_type, will_accept_to_work_for_below_category, bank_name, account_no, IFSC_code, type_of_account, owner_name, owner_phone, address1, city, zip, active) {

      if ( this.driver_name === '') {

        alert('Please Enter drivername');
      }

      if (this.email === '') {
         alert('Please Enter Email');

       } else {

                     this.driver_name = driver_name;
                     this.email = email;
                     this.phone1 = phone;
                     this.driver_address1 = driver_address;
                     this.driver_city1 = driver_city;
                     this.driver_state1 = driver_state;
                     this.driver_zip1 = driver_zip;
                     this.vehicle_number1 = vehicle_number;
                     this.alternate_contact_num = alternate_contact_num;
                     this.emergency_contact_num = emergency_contact_num;
                     this.namea = namea;
                     this.contact_numbera = contact_numbera;
                     this.nameb = nameb;
                     this.category1 = category;
                     this.contact_numberb = contact_numberb;
                     this.badge1 = badge;
                     this.vehicle_registered_owner1 = vehicle_registered_owner;
                     this.manufacturer1 = manufacturer;
                     this.class1 = class1;
                     this.model1 = model;
                     this.color1 = color;
                     this.gvw_in_kg1 = gvw_in_kg;
                     this.body_asper_RC1 = body_asper_RC;
                     this.unladen_weight1 = unladen_weight;
                     this.seating_capacity1 = seating_capacity;
                     this.registered_time = registered_time;
                     this.fc_val1 = fc_val;
                     this.road_tax_val1 = road_tax_val;
                     this.dl_expiry_date1 = dl_expiry_date;
                     this.permit_val1 = permit_val;
                     this.badge_val1 = badge_val;
                     this.bank_name1 = bank_name;
                     this.account_no1 = account_no;
                     this.IFSC_code1 = IFSC_code;
                     this.type_of_account1 = type_of_account;
                     this.namec = namec;
                     this.contact_numberc = contact_numberc;
                     this.named = named;
                     this.contact_numberd = contact_numberd;
                     this.active1 = active;
                     this.owner_name = owner_name;
                     this.owner_phone = owner_phone;
                     this.address1 = address1;
                     this.city = city;
                    // this.state = state;
                     this.zip = zip;
                     this.will_accept_to_work_for_below_category =this.will_accept_to_work_for_below_category;
                     this.owner_cum_driver = this.ownerstatus;
                     this.work_preference1 = work_preference;
                     this.body_type1 = body_type;
                     this.profile_photo = profile_photo2;
                     this.dl_scan_copy = dl_scan_copy2;
                     this.driver_pan_card = driver_pan_card2;
                      this.driver_aadhar_card = driver_aadhar_card2;
                     this.rc_card_image = rc_card_image2;
                    //  this.permit_image = permit_image2;
                     this.insurance_image = insurance_image2;
                    //  this.puc_image = puc_image2;
                     this.owner_aadhar_card = owner_aadhar_card2;
                     this.cancelled_cheque_image = cancelled_cheque_image2;
                    //  this.vehicle_photo_front = vehicle_photo_front2;
                    //  this.vehicle_photo_back = vehicle_photo_back2;
                    //  this.vehicle_photo_right = vehicle_photo_right2;
                    //  this.vehicle_photo_left = vehicle_photo_left2;


                     const fd = new FormData();
                     // fd.append('driver_uuid', this.driver_uuid1);
                     // fd.append('vendor_uuid', this.vendor_uuid1);
                     fd.append('driver_name', this.driver_name);
                     fd.append('email', this.email);
                     fd.append('phone', this.phone1);
                     fd.append('driver_address', this.driver_address1);
                     fd.append('driver_city', this.driver_city1);
                     fd.append('driver_state', this.driver_state1);
                     fd.append('driver_zip', this.driver_zip1);
                     fd.append('alternate_contact_num', this.alternate_contact_num)
                     fd.append('emergency_contact_num', this.emergency_contact_num)
                     fd.append('badge', this.badge1);
                     fd.append('body_asper_RC', this.body_asper_RC1);
                     fd.append('vehicle_registered_owner', this.vehicle_registered_owner1);
                     fd.append('model', this.model1);
                     fd.append('permit_val', this.permit_val1);
                     fd.append('badge_val', this.badge_val1);
                     fd.append('driver_reference_one[name]', this.namea);
                     fd.append('driver_reference_one[contact_number]', this.contact_numbera);
                     fd.append('driver_reference_two[name]', this.nameb);
                     fd.append('driver_reference_two[contact_number]', this.contact_numberb);
                     fd.append('vehicle_number', this.vehicle_number1);
                      fd.append('profile_photo', this.profile_photo);
                      fd.append('dl_scan_copy', this.dl_scan_copy);
                     fd.append('driver_pan_card', this.driver_pan_card);
                     fd.append('driver_aadhar_card', this.driver_aadhar_card);
                     fd.append('rc_card_image', this.rc_card_image);
                      // fd.append('permit_image', this.permit_image);
                      fd.append('insurance_image', this.insurance_image);
                      // fd.append('puc_image', this.puc_image);
                      fd.append('owner_aadhar_card', this.owner_aadhar_card);
                      fd.append('cancelled_cheque_image', this.cancelled_cheque_image);
                      // fd.append('vehicle_photo_front', this.vehicle_photo_front);
                      // fd.append('vehicle_photo_back', this.vehicle_photo_back);
                      // fd.append('vehicle_photo_right', this.vehicle_photo_right);
                      // fd.append('vehicle_photo_left', this.vehicle_photo_left);
                     fd.append('dl_expiry_date', this.dl_expiry_date1);
                     fd.append('fc_val', this.fc_val1);
                     fd.append('registered_time', this.registered_time);
                     fd.append('manufacturer', this.manufacturer1);
                     fd.append('class', this.class1);
                     fd.append('color', this.color1);
                     fd.append('gvw_in_kg', this.gvw_in_kg1);
                     fd.append('unladen_weight', this.unladen_weight1);
                     fd.append('category', this.category1);
                     fd.append('seating_capacity', this.seating_capacity1);
                     fd.append('road_tax_val', this.road_tax_val1);
                     fd.append('owner_name', this.owner_name);
                     fd.append('owner_phone', this.owner_phone);
                     fd.append('owner_address[address1]', this.address1);
                     fd.append('owner_address[city]', this.city);
                     fd.append('owner_address[state]', this.state);
                     fd.append('owner_address[zip]', this.zip);
                     fd.append('reference_one[name]', this.namec);
                     fd.append('reference_one[contact_number]', this.contact_numberc);
                     fd.append('reference_two[name]', this.named);
                     fd.append('reference_two[contact_number]', this.contact_numberd);
                     fd.append('bank_details[bank_name]', this.bank_name1);
                     fd.append('bank_details[account_no]', this.account_no1);
                     fd.append('bank_details[IFSC_code]', this.IFSC_code1);
                     fd.append('bank_details[type_of_account]', this.type_of_account1);
                     fd.append('owner_cum_driver', this.owner_cum_driver);
                     fd.append('body_type', this.body_type1);
                     fd.append('work_preference', this.work_preference1)
                     fd.append('will_accept_to_work_for_below_category', this.will_accept_to_work_for_below_category);
                     fd.append('active', this.active1);
                     this.closeModal()

                       console.log("images********",this.profile_photo);
                         this.httpClient.post('https://zeigerapp.in/api/1.0/driver-fourregistration/phone?phone='+this.phone,fd)

                         .subscribe((data: any) => {

                        console.log(this.phone,"driveronlydata");
                        

                         alert(data.msg);
                         this.router.navigate(['/dashboard']);

                        }, (error: HttpErrorResponse) => {
                          console.log("posting")

                          console.log(error);
                          alert('unable to register');
                        });
         }
    }


  rccardimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#rccard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
rccard(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
  this.elementRef.nativeElement.querySelector('#rccard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
permitimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#permit').style.transform = `rotate(${this.rotationAmount}deg)`;
}
permit(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#permit').style.transform = `rotate(${this.rotationAmount}deg)`;
}
insuranceimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#insurance').style.transform = `rotate(${this.rotationAmount}deg)`;
}
insurance(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#insurance').style.transform = `rotate(${this.rotationAmount}deg)`;
}
profileimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#profile').style.transform = `rotate(${this.rotationAmount}deg)`;
}
profile(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#profile').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehiclebackimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#vehiclephotoback').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehicleback(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#vehiclephotoback').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehiclefrontimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#vehiclephotofront').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehiclefront(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#vehiclephotofront').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehiclerightimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#vehiclephotoright').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehicleright(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#vehiclephotoright').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehicleleftimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#vehiclephotoleft').style.transform = `rotate(${this.rotationAmount}deg)`;
}
vehicleleft(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#vehiclephotoleft').style.transform = `rotate(${this.rotationAmount}deg)`;
}
dlscanimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#dlscan').style.transform = `rotate(${this.rotationAmount}deg)`;
}
dlscan(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#dlscan').style.transform = `rotate(${this.rotationAmount}deg)`;
}
driverpancardimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#driverpancard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
driverpancard(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#driverpancard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
driveraadharcardimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#driveraadharcard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
driveraadharcard(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#driveraadharcard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
owneraadharcardimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#owneraadharcard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
owneraadharcard(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#owneraadharcard').style.transform = `rotate(${this.rotationAmount}deg)`;
}
pucimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#puc').style.transform = `rotate(${this.rotationAmount}deg)`;
}
puc(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#puc').style.transform = `rotate(${this.rotationAmount}deg)`;
}
cancelledimage(direction) {
  this.rotationAmount += direction === 'left' ? -90 : 90;
  this.elementRef.nativeElement.querySelector('#cancelledchequeimage').style.transform = `rotate(${this.rotationAmount}deg)`;
  document.getElementById('cancelledchequeimage').setAttribute('src', this.cancelled_cheque_image);
}
cancelled(direction) {
  this.rotationAmount += direction === 'right' ? 90 : -90;
this.elementRef.nativeElement.querySelector('#cancelledchequeimage').style.transform = `rotate(${this.rotationAmount}deg)`;
 document.getElementById('cancelledchequeimage').setAttribute('src', this.cancelled_cheque_image);
}

}


