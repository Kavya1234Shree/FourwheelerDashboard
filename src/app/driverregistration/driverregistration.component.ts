import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-driverregistration',
  templateUrl: './driverregistration.component.html',
  styleUrls: ['./driverregistration.component.scss']
})
export class DriverregistrationComponent implements OnInit {
 
 work_preference:any[];
  packingList: string[] = ['ONLY LOCAL', 'LOCAL & OUTSTATION', 'OUTSTATION'];

  shown= false;
;


  selectedFile: File = null;
  onFileChanged(event) {
     this.selectedFile =<File> event.target.files[0];
  }
  dlscancopyFile: File = null;
  onDlscancopyFileChanged(event) {
     this.dlscancopyFile =<File> event.target.files[0];
  }
  insuranceimageFile: File = null;
  onInsuranceimageFileChanged(event) {
     this.insuranceimageFile=<File> event.target.files[0];
  }

rccardimageFile: File = null;
  onRccardimageFileChanged(event) {
     this.rccardimageFile =<File> event.target.files[0];
  }
  pucimageFile: File = null;
  onPucimageFileChanged(event) {
     this.pucimageFile =<File> event.target.files[0];
  }
  permitimageFile: File = null;
  onPermitimageFileChanged(event) {
     this.permitimageFile =<File> event.target.files[0];
  }
  driverpancardFile: File = null;
  onDriverpancardFileChanged(event) {
     this.driverpancardFile =<File> event.target.files[0];
  }
  driveraadharcardFile: File = null;
  onDriveraadharcardFileChanged(event) {
     this.driveraadharcardFile =<File> event.target.files[0];
  }
  cancelledchequeimageFile: File = null;
  onCancelledchequeimageFileChanged(event) {
     this.cancelledchequeimageFile =<File> event.target.files[0];
  }

owneraadharcardFile: File = null;
  onOwneraadharcardFileChanged(event) {
     this.owneraadharcardFile =<File> event.target.files[0];
  }
  vehiclephotofrontFile: File = null;
  onVehiclephotofrontFileChanged(event) {
     this.vehiclephotofrontFile =<File> event.target.files[0];
  }

  vehiclephotobackFile: File = null;
  onVehiclephotobackFileChanged(event) {
     this.vehiclephotobackFile =<File> event.target.files[0];
  }

  vehiclephotorightFile: File = null;
  onVehiclephotorightFileChanged(event) {
     this.vehiclephotorightFile =<File> event.target.files[0];
  }

  vehiclephotoleftFile: File = null;
  onVehiclephotoleftFileChanged(event) {
     this.vehiclephotoleftFile =<File> event.target.files[0];
  }




driver_uuid1:string='';
vendor_uuid1:string ='';
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
will_accept_to_work_for_below_categor1:string='';
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


  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute) { }

  accounts=[
   {id : "Savings",  name:"Savings"},
   {id :"Current" ,name:"Current"},
   ]

accountss=[
{id : "Yes",  name:"Yes"},
{id :"No" ,name:"No"},
]


accountsss=[
{id : "Piaggio Ape",  name:"Piaggio Ape"},
{id :"Tata Ace Mini Truck" ,name:"Tata Ace Mini Truck"},
{id :"Tata Super Ace" ,name:"Tata Super Ace"},
{id :"Tata 407" ,name:"Tata 407"},
{id :"Eicher Canter" ,name:"Eicher Canter"}
]



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
  }
  onDriver(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,alternate_contact_num,
   emergency_contact_num,vehicle_number,badge,vehicle_registered_owner,category,model,gvw_in_kg,body_asper_RC,
   unladen_weight,seating_capacity,road_tax_val,regn_date,fc_val,dl_expiry_date,permit_val,badge_val,manufacturer,class1,color,
   namea,contact_numbera,nameb,contact_numberb,namec,contact_numberc,named,contact_numberd,work_preference,
   body_type,will_accept_to_work_for_below_categor,
   bank_name,account_no,IFSC_code,type_of_account,owner_name,owner_phone,address1,city,state,zip,active){
   
      if( this.driver_name==""){
         
        alert("Please Enter drivername"); 
      }
      
      if(this.email==""){
         alert("Please Enter Email"); 
 
       }
      // else if(this.email!==""){
      //    alert("Please enter Valid Email"); 
 
      //  }

    
      else{
      
                     this.driver_name=driver_name;
                     this.email=email;
                     this.phone1=phone;
                     this.driver_address1= driver_address;
                     this.driver_city1= driver_city;
                     this.driver_state1=driver_state;
                     this.driver_zip1=driver_zip;
                     this.vehicle_number1=vehicle_number;
                     this.alternate_contact_num1=alternate_contact_num;
                     this.emergency_contact_num1=emergency_contact_num
                     this.namea=namea;
                     this.contact_numbera=contact_numbera;
                     this.nameb=nameb;
                     this.category1=category;
                     this.contact_numberb=contact_numberb;
                     this.badge1=badge;
                     this.vehicle_registered_owner1=vehicle_registered_owner;
                     this.manufacturer1=manufacturer;
                     this.class=class1;
                     this.model1=model;
                     this.color1=color;
                     this.gvw_in_kg1=gvw_in_kg;
                     this.body_asper_RC1=body_asper_RC;
                     this.unladen_weight1=unladen_weight;
                     this.seating_capacity1=seating_capacity;
                     this.regn_date1=regn_date;
                     this.fc_val1=fc_val;
                     this.road_tax_val1=road_tax_val;
                     this.dl_expiry_date1=dl_expiry_date;
                     this.permit_val1=permit_val;
                     this.badge_val1=badge_val;
                     this.bank_name1=bank_name;
                     this.account_no1=account_no;
                     this.IFSC_code1=IFSC_code;
                     this.type_of_account1=type_of_account;
                     this.namec=namec;
                     this.contact_numberc=contact_numberc;
                     this.named=named;
                     this.contact_numberd=contact_numberd;
                     this.active1=active;
                     this.owner_name=owner_name;
                     this.owner_phone=owner_phone;
                     this.address1=address1;
                     this.city=city;
                     this.state=state;
                     this.zip=zip;
                     this.will_accept_to_work_for_below_categor1=will_accept_to_work_for_below_categor;
                     this.owner_cum_driver=this.ownerstatus;
                     this.work_preference1=work_preference;
                     this.body_type1=body_type;

                     
                  const fd = new FormData();  
                  fd.append('driver_uuid', this.driver_uuid1);
                  fd.append('vendor_uuid', this.vendor_uuid1);
                  fd.append('driver_name', this.driver_name);
                  fd.append('email', this.email);
                  fd.append('phone', this.phone1);
                  fd.append('driver_address', this.driver_address1);
                  fd.append('driver_city', this.driver_city1);
                  fd.append('driver_state', this.driver_state1);
                  fd.append('driver_zip', this.driver_zip1);
                  fd.append('alternate_contact_num',this.alternate_contact_num1)
                  fd.append('emergency_contact_num',this.emergency_contact_num1)
                  fd.append('badge',this.badge1);
                  fd.append('body_asper_RC',this.body_asper_RC1);
                  fd.append('vehicle_registered_owner',this.vehicle_registered_owner1);
                  fd.append('model',this.model1);
                  fd.append('permit_val',this.permit_val1);
                  fd.append('badge_val',this.badge_val1);
                  fd.append('driver_reference_one[name]',this.namea);
                  fd.append('driver_reference_one[contact_number]',this.contact_numbera);
                  fd.append('driver_reference_two[name]',this.nameb);
                  fd.append('driver_reference_two[contact_number]',this.contact_numberb);
                  fd.append('profile_photo', this.selectedFile, this.selectedFile.name);
                  fd.append('dl_scan_copy',this.dlscancopyFile,this.dlscancopyFile.name);
                  fd.append('vehicle_number', this.vehicle_number1);
                  fd.append('driver_pan_card', this.driverpancardFile, this.driverpancardFile.name);
                  fd.append('driver_aadhar_card', this.driveraadharcardFile, this.driveraadharcardFile.name);
                  fd.append('rc_card_image', this.rccardimageFile, this.rccardimageFile.name);
                  fd.append('permit_image', this.permitimageFile, this.permitimageFile.name);
                  fd.append('insurance_image', this.insuranceimageFile, this.insuranceimageFile.name);
                  fd.append('puc_image',this.pucimageFile, this.pucimageFile.name);
                  fd.append('owner_aadhar_card',this.owneraadharcardFile, this.owneraadharcardFile.name);
                  fd.append('cancelled_cheque_image',this.cancelledchequeimageFile, this.cancelledchequeimageFile.name);
                  fd.append('vehicle_photo_front',this.vehiclephotofrontFile, this.vehiclephotofrontFile.name);
                  fd.append('vehicle_photo_back',this.vehiclephotobackFile, this.vehiclephotobackFile.name);
                  fd.append('vehicle_photo_right',this.vehiclephotorightFile, this.vehiclephotorightFile.name);
                  fd.append('vehicle_photo_left',this.vehiclephotoleftFile, this.vehiclephotoleftFile.name);
                  fd.append('dl_expiry_date',this.dl_expiry_date1);
                  fd.append('fc_val',this.fc_val1);
                  fd.append('regn_date', this.regn_date1);
                  fd.append('manufacturer',this.manufacturer1);
                  fd.append('class',this.class);
                  fd.append('color',this.color1);
                  fd.append('gvw_in_kg',this.gvw_in_kg1);
                  fd.append('unladen_weight',this.unladen_weight1);
                  fd.append('category',this.category1);
                  fd.append('seating_capacity',this.seating_capacity1);
                  fd.append('road_tax_val',this.road_tax_val1);
                  fd.append('owner_name',this.owner_name);
                  fd.append('owner_phone',this.owner_phone);
                  fd.append('owner_address[address1]',this.address1);
                  fd.append('owner_address[city]',this.city);
                  fd.append('owner_address[state]',this.state);
                  fd.append('owner_address[zip]',this.zip);
                  fd.append('reference_one[name]',this.namec);
                  fd.append('reference_one[contact_number]',this.contact_numberc);
                  fd.append('reference_two[name]',this.named);
                  fd.append('reference_two[contact_number]',this.contact_numberd);
                  fd.append('bank_details[bank_name]',this.bank_name1);
                  fd.append('bank_details[account_no]',this.account_no1);
                  fd.append('bank_details[IFSC_code]',this.IFSC_code1);
                  fd.append('bank_details[type_of_account]',this.type_of_account1);
                  fd.append('owner_cum_driver',this.owner_cum_driver);
                  fd.append('body_type',this.body_type1);
                  fd.append('work_preference',this.work_preference1)
                  fd.append('will_accept_to_work_for_below_categor',this.will_accept_to_work_for_below_categor1);
                  fd.append('active', this.active1);
    
                  
                     if(this.owner_cum_driver=="No"){
                        this.http.post('https://zeigerapp.in/api/1.0/driver-fourregistration',fd)
   
                        .subscribe((data:any)=>{
                           
                        console.log('4whl drv only data',data);
   
                        alert(data.msg);
   
                        },(error:HttpErrorResponse)=>{
                           alert("Unable to Register..Please provide valid info");
                        });
   
                     }else{
                        this.http.post('https://zeigerapp.in/api/1.0/driver-owner',fd)
   
                        .subscribe((data:any)=>{
                           
                        console.log("driv cum owner",data);
   
                        alert(data.msg);
                        this.router.navigate(['/dashboard']);
   
                        },
                        (error:HttpErrorResponse)=>{
                           alert("Unable to Register..Please provide valid info");
                        });
                     }
   
            
      }

  }
}
