import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-twowheelerdriverregistration',
  templateUrl: './twowheelerdriverregistration.component.html',
  styleUrls: ['./twowheelerdriverregistration.component.scss']
})
export class TwowheelerdriverregistrationComponent implements OnInit {


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

  driveraadharcardFile: File = null;
  onDriveraadharcardFileChanged(event) {
     this.driveraadharcardFile =<File> event.target.files[0];
  }


driver_uuid1:string='';
vendor_uuid1:string ='';
driver_name1: string ='';
email1:string='';
phone1:string='';
alternate_contact_num1:string='';
emergency_contact_num1:string='';
driver_address1:string ='';
driver_city1:string ='';
driver_state1:string ='';
driver_zip1:string='';
vehicle_number1:string='';
dl_expiry_date1:string ='';
rc_expiry_date1:string='';
insurence_expiry_date1:string='';
active1:string='';



  constructor(private http:HttpClient,private router:Router, route :ActivatedRoute) { }

  ngOnInit() {

  }
  onDriver(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,alternate_contact_num,
    emergency_contact_num,vehicle_number,dl_expiry_date,rc_expiry_date,insurence_expiry_date,active){
   
                     this.driver_name1=driver_name;
                     this.email1=email;
                     this.phone1=phone;
                     this.driver_address1= driver_address;
                     this.driver_city1= driver_city;
                     this.driver_state1=driver_state;
                     this.driver_zip1=driver_zip;
                     this.vehicle_number1=vehicle_number;
                     this.alternate_contact_num1=alternate_contact_num;
                     this.emergency_contact_num1=emergency_contact_num;
                     this.dl_expiry_date1=dl_expiry_date;
                     this.rc_expiry_date1=rc_expiry_date;
                     this.insurence_expiry_date1=insurence_expiry_date;
                     this.active1=active;
                   

                     
                  const fd = new FormData();  
                  fd.append('driver_uuid', this.driver_uuid1);
                  fd.append('vendor_uuid', this.vendor_uuid1);
                  fd.append('driver_name', this.driver_name1);
                  fd.append('email', this.email1);
                  fd.append('phone', this.phone1);
                  fd.append('driver_address', this.driver_address1);
                  fd.append('driver_city', this.driver_city1);
                  fd.append('driver_state', this.driver_state1);
                  fd.append('driver_zip', this.driver_zip1);
                  fd.append('alternate_contact_num',this.alternate_contact_num1)
                  fd.append('emergency_contact_num',this.emergency_contact_num1)
                  fd.append('profile_photo', this.selectedFile, this.selectedFile.name);
                  fd.append('dl_scan_copy',this.dlscancopyFile,this.dlscancopyFile.name);
                  fd.append('vehicle_number', this.vehicle_number1);
                  fd.append('driver_aadhar_card', this.driveraadharcardFile, this.driveraadharcardFile.name);
                  fd.append('rc_card_image', this.rccardimageFile, this.rccardimageFile.name);
                  fd.append('insurance_image', this.insuranceimageFile, this.insuranceimageFile.name);
                  fd.append('dl_expiry_date',this.dl_expiry_date1);
                  fd.append('rc_expiry_date1',this.rc_expiry_date1)
                  fd.append('insurence_expiry_date',this.insurence_expiry_date1)
                  fd.append('active', this.active1);
             
                     this.http.post('http://165.22.219.195:4000/api/driver-registration',fd)

                     .subscribe((data:any)=>{
                        
                     console.log(data);

                     alert("successfully Register");

                     },(error:HttpErrorResponse)=>{
                        alert("Unable to Register..Please provide valid info");
                     });
                  
             
      }

  
}
