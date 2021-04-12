
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-twowheel-dialog',
//   templateUrl: './twowheel-dialog.component.html',
//   styleUrls: ['./twowheel-dialog.component.scss']
// })
// export class TwowheelDialogComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { style, state, transition, animate, trigger } from '@angular/animations';

@Component({
    selector: 'app-twowheel-dialog',
    templateUrl: './twowheel-dialog.component.html',
    styleUrls: ['./twowheel-dialog.component.scss'],
  
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
]
  
})
export class TwowheelDialogComponent implements OnInit {
  state: string = 'default';
  state1: string = 'default';
  state2: string = 'default';
  state3: string = 'default';
  state4: string = 'default';
  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  rotate1() {
    this.state1 = (this.state1 === 'default' ? 'rotated' : 'default');
}
rotate2() {
  this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
}
rotate3() {
  this.state3 = (this.state3 === 'default' ? 'rotated' : 'default');
}
rotate4() {
  this.state4 = (this.state4 === 'default' ? 'rotated' : 'default');
}
     public detail: any;
     public phone:any;
     public  vehicle_number : string;
     public driver_name: string;
     public driver_address: string;
     public driver_city:any;
     public driver_state: string;
     public driver_zip: string;
     public email: string;
     public profile_photo: any;
     public rc_card_image: any;
     public insurance_image: any;
     public dl_scan_copy: any;
     public driver_aadhar_card: any; 
     public profile_photo1: any;
     public rc_card_image1: any;
     public insurance_image1: any;
     public dl_scan_copy1: any;
     public driver_aadhar_card1: any; 
     rc_expiry_date: string;
     dl_expiry_date: string;
     insurence_expiry_date: string;
     public active: any;
     emergency_contact_num: string;
     alternate_contact_num: string;
     
  constructor( private http: HttpClient,public dialogRef: MatDialogRef<TwowheelDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
     {
    this.phone = data;  
   }

  ngOnInit() { let resp = this.http.get("https://apis.zeigerapp.in/api/drivertwo/phone?phone="+this.phone);
  
  resp.subscribe((data: any)=>{
  this.detail= data;
 

  this.vehicle_number = data['vehicle_number']
  this.driver_name = data['driver_name']
  this.driver_address = data['driver_address']
  this.driver_city = data['driver_city']
  this.driver_zip = data['driver_zip']
  this.driver_state = data['driver_state']
  this.email = data['email']
  this.phone = data['phone']

  this.profile_photo ='https://apis.zeigerapp.in/'+ data['profile_photo']
  this.profile_photo1 = new File([this.profile_photo],"profile.jpg",{type:"image/jpeg"});
  console.log("blob image",this.profile_photo1)

  this.rc_card_image ='https://apis.zeigerapp.in/'+ data['rc_card_image']
    this.rc_card_image1 = new File([this.rc_card_image],"rccard.jpg",{type:"image/jpeg"});

  this.insurance_image ='https://apis.zeigerapp.in/'+data ['insurance_image']
  this.insurance_image1 = new File([this.insurance_image],"insurance.jpg",{type:"image/jpeg"});

  this.dl_scan_copy ='https://apis.zeigerapp.in/'+ data['dl_scan_copy']
  this.dl_scan_copy1 = new File([this.dl_scan_copy],"dlcopy.jpg",{type:"image/jpeg"});

  this.driver_aadhar_card ='https://apis.zeigerapp.in/'+data ['driver_aadhar_card']
  this.driver_aadhar_card1 = new File([this.driver_aadhar_card],"adharcard.jpg",{type:"image/jpeg"});

  // this.profile_photo1 = new Blob([this.profile_photo]);
  // console.log("blob image",this.profile_photo1)
  // this.rc_card_image ='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+ data['rc_card_image']
  //   this.rc_card_image1 = new Blob([this.rc_card_image]);
  // this.insurance_image ='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data ['insurance_image']
  // this.insurance_image1 = new Blob([this.insurance_image]);
  // this.dl_scan_copy ='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+ data['dl_scan_copy']
  // this.dl_scan_copy1 = new Blob([this.dl_scan_copy]);
  // this.driver_aadhar_card ='https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/'+data ['driver_aadhar_card']
  // this.driver_aadhar_card1 = new Blob([this.driver_aadhar_card]);

  console.log("regdta is ",this.detail);
 console.log(this.profile_photo);
});

}

  onprofilephotoFileChange(event) {
   
     this.profile_photo =<File>event.target.files[0];
     this.profile_photo1 = <File>event.target.files[0]
    console.log("upload image",this.profile_photo)
     var reader = new FileReader();
     reader.readAsDataURL(this.profile_photo); 
     reader.onload = (_event) => { 
       this.profile_photo = reader.result;
     } 
  }
  
  onDlscancopyFileChange(event) {
     this.dl_scan_copy =<File>event.target.files[0];
     this.dl_scan_copy1=<File>event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.dl_scan_copy); 
     reader.onload = (_event) => { 
       this.dl_scan_copy = reader.result;
  }
}
  
  onInsuranceimageFileChange(event) {
  
     this.insurance_image=<File>event.target.files[0];
     this.insurance_image1=<File>event.target.files[0];

     var reader = new FileReader();
     reader.readAsDataURL(this.insurance_image); 
     reader.onload = (_event) => { 
       this.insurance_image = reader.result;
  }
  }

  onRccardimageFileChange(event) {
    
     this.rc_card_image =<File>event.target.files[0];
     this.rc_card_image1 =<File>event.target.files[0];
   
     var reader = new FileReader();
     reader.readAsDataURL(this.rc_card_image); 
     reader.onload = (_event) => { 
       this.rc_card_image = reader.result;
  }
  }

  
  onDriveraadharcardFileChange(event) {
    this.driver_aadhar_card =<File>event.target.files[0];
    this.driver_aadhar_card1 =<File>event.target.files[0];
       
     var reader = new FileReader();
     reader.readAsDataURL(this.driver_aadhar_card); 
    
     reader.onload = (_event) => { 
       this.driver_aadhar_card = reader.result;
  }
}
// preview(files) {
//   var reader = new FileReader();
//      reader.readAsDataURL(this.profilephotoFile); 
//      reader.onload = (_event) => { 
//        this.profile_photo = reader.result;

//   }
// }
// preview1(files) {
//   var reader = new FileReader();
//   reader.readAsDataURL(files[0]); 
//   reader.onload = (_event) => { 
//     this.driver_aadhar_card = reader.result;
//   } 
// }
// preview2(files) {
//   var reader = new FileReader();
//   reader.readAsDataURL(files[0]); 
//   reader.onload = (_event) => { 
//     this.dl_scan_copy = reader.result;
//   } 
// }
// preview3(files) {
//   var reader = new FileReader();
//   reader.readAsDataURL(files[0]); 
//   reader.onload = (_event) => { 
//     this.rc_card_image = reader.result;
//   } 
// }

// preview4(files) {
//   var reader = new FileReader();
//   reader.readAsDataURL(files[0]); 
//   reader.onload = (_event) => { 
//     this.profile_photo = reader.result;
//   } 
// }

onSubmit(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,alternate_contact_num,
  emergency_contact_num,vehicle_number,dl_expiry_date,rc_expiry_date,insurence_expiry_date,active)
{
  this.phone=phone;
  this.driver_name = driver_name
  this.driver_address = driver_address
  this.driver_city = driver_city
  this.driver_zip = driver_zip
  this.driver_state = driver_state
  this.alternate_contact_num = alternate_contact_num
  this.emergency_contact_num =emergency_contact_num
  this.email =email
  this.vehicle_number = vehicle_number
  this.profile_photo = this.profile_photo1
  this.rc_card_image =this.rc_card_image1
  this.insurance_image =this.insurance_image1
  this.dl_scan_copy = this.dl_scan_copy1
  this.driver_aadhar_card=this.driver_aadhar_card1
  this.rc_expiry_date = rc_expiry_date
  this.dl_expiry_date = dl_expiry_date
  this.insurence_expiry_date =insurence_expiry_date
  this.active = active

  const fd = new FormData();  
                 
                  fd.append('driver_name', this.driver_name);
                  fd.append('email', this.email);
                  fd.append('phone', this.phone);
                  fd.append('driver_address', this.driver_address);
                  fd.append('driver_city',this.driver_city);
                  fd.append('driver_state', this.driver_state);
                  fd.append('driver_zip', this.driver_zip);
                  fd.append('alternate_contact_num',this.alternate_contact_num)
                  fd.append('emergency_contact_num',this.emergency_contact_num)
                  fd.append('profile_photo', this.profile_photo);
                  fd.append('dl_scan_copy', this.dl_scan_copy );
                  fd.append('vehicle_number', this.vehicle_number);
                  fd.append('driver_aadhar_card',this.driver_aadhar_card);
                  fd.append('rc_card_image', this.rc_card_image);
                  fd.append('insurance_image', this.insurance_image);
                  fd.append('dl_expiry_date',this.dl_expiry_date);
                  fd.append('rc_expiry_date',this.rc_expiry_date)
                  fd.append('insurence_expiry_date',this.insurence_expiry_date)
                  fd.append('active', this.active);

  this.http.post('https://zeigerapp.in/api/1.0/driver-tworegistration',fd )
  .subscribe((data:any)=>{
       
    console.log(data);

    alert("successfully Register");
    

   },(error:HttpErrorResponse)=>{
     console.log(error);

     alert("successfully registered");
   });
 
}
  
actionFunction() {
  alert("You Have Successfully Updated Your Profile.!");
  this.closeModal();
}
closeModal() {
  this.dialogRef.close();
}

}