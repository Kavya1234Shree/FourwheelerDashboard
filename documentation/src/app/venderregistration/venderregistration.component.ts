import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-venderregistration',
  templateUrl: './venderregistration.component.html',
  styleUrls: ['./venderregistration.component.scss']
})
export class VenderregistrationComponent implements OnInit {

  selectedFile: File = null;
  onFileChanged(event) {
     this.selectedFile =<File> event.target.files[0];
  }
  
  vendor_name1:string ='';
  phone1: string ='';
  company_email1: string ='';
  company_name1:string='';
  address2:string ='';
  city1:string ='';
  state1:string ='';
  zip1:string='';
  type_of_company1:string;
  GSTN1:string ='';
  account_no1:string ='';
  IFSC_code1:string ='';
  type_of_account1:string;
  
  escalation_matrices_level1_contact:string ='';
  escalation_matrices_level2_contact:string ='';
  escalation_matrices_level3_contact:string ='';
  // active1:string='';

  

  constructor(private http:HttpClient,private router:Router) { }

  accounts=[
  {id : "Savings",  name:"Savings"},
  {id :"Current" ,name:"Current"},
  ]

  companys=[
    {id:"propretory",name:'propretory'},
    {id:"Pvt_ltd",name:'Pvt_ltd'},
    {id:"parternship",name:'parternship'},
    {id:"ltd",name:'ltd'},
  ]

  ngOnInit() {
    this.http.get('https://apis.zeiger.tech/api/vendor-reg')
    .subscribe((data:any)=>{
   
      console.log(data);
    })
  }
  onVendor(vendor_name,phone,company_email,company_name,address1,state,city,zip,type_of_company,GSTN,account_no,IFSC_code,type_of_account,escalation_matrices_level1_contact,escalation_matrices_level2_contact,
    escalation_matrices_level3_contact){
    this.vendor_name1=vendor_name;
    this.phone1=phone;
    this.company_email1=company_email;
    this.company_name1=company_name;
    this.address2=address1;
    this.city1=city;
    this.state1=state;
    this.zip1=zip;
    this.type_of_company1=type_of_company;
    this.GSTN1=GSTN;
    this.account_no1=account_no;
    this.IFSC_code1=IFSC_code;
    this.type_of_account1=type_of_account;
    this.escalation_matrices_level1_contact=escalation_matrices_level1_contact;
    this.escalation_matrices_level2_contact=escalation_matrices_level2_contact;
    this.escalation_matrices_level3_contact=escalation_matrices_level3_contact;
    // this.active1=active;
    
    

    const fd = new FormData();
    
    fd.append('vendor_name', this.vendor_name1);
    fd.append('phone', this.phone1);
    fd.append('company_email', this.company_email1);
    fd.append('company_name', this.company_name1);
    fd.append('address1', this.address2);
    fd.append('city', this.city1);
    fd.append('state', this.state1);
    fd.append('zip', this.zip1);
    fd.append('type_of_company', this.type_of_company1);
    fd.append('GSTN', this.GSTN1);
    fd.append('GST_certificate', this.selectedFile, this.selectedFile.name);
    fd.append('account_no', this.account_no1);
    fd.append('IFSC_code', this.IFSC_code1);
    fd.append('type_of_account', this.type_of_account1);
    fd.append('escalation_matrices_level1_contact', this.escalation_matrices_level1_contact);
    fd.append('escalation_matrices_level2_contact', this.escalation_matrices_level2_contact);
    fd.append('escalation_matrices_level3_contact', this.escalation_matrices_level3_contact);
    // fd.append('active', this.active1);
    
   
    
   

    this.http.post('https://cors-anywhere.herokuapp.com/https://zeiger.tech/api/vendor-registration',fd)

    .subscribe((data:any)=>{
       
     console.log(data);

     alert("successfully Register");
      this.router.navigate(['/dashboard']);

    },(error:HttpErrorResponse)=>{
      alert("Unable to Register..Please provide valid info");
    });
  


  }

}
