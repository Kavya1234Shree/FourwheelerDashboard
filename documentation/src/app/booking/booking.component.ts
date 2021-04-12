import { Component,ElementRef, NgZone, OnInit, ViewChild,NgModule, Pipe  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {

  title = 'Registered Customer Details';
  searchText;

 
customer:any=[];
  name1: string = '';
  email1: string ='';
  phone1: string ='';

  public register_customer:boolean = false;
  public nonregister_customer:boolean=false;
  public buttonName:any = 'registered_customer';
  public buttonName1:any = 'nonregister_customer';
private regicus = true;
private nonregicus = true;

  constructor(
    private http:HttpClient,private router:Router
   
  ) {}

  ngOnInit() {
    this.http.get('http://165.22.219.195:4000/api/users/cust')
    .subscribe((data:any)=>{
this.customer=data
   
      console.log(this.customer);
    })


  }

toggle() {
  this.register_customer = !this.register_customer;
 this.nonregicus=false;
  // CHANGE THE NAME OF THE BUTTON.
  if(this.register_customer)  {
    this.buttonName = "registered_customer";
  }
  else
  {
    this.buttonName = "registered_customer";
    this.nonregicus = true;
  }

}
  
toggle1() {
  this.nonregister_customer = !this.nonregister_customer;
this.regicus = false;
if(this.nonregister_customer)  
{
this.buttonName1 = "nonregister_customer";
}
else
{
this.buttonName1 = "nonregister_customer";
this.regicus = true;
}
}
 

onRegister(name,email,phone){
  this.name1=name;
  this.email1=email;
  this.phone1=phone;


  this.http.post('http://165.22.219.195:4000/api/users',{name:this.name1,email:this.email1,phone:this.phone1},{responseType:'text'})

  .subscribe((data:any)=>{
    
   console.log(data);

   alert("successfully Register");
   this.router.navigate(['/bookinglogin']);

  },(error:HttpErrorResponse)=>{
    alert("Unable to Register..Please provide valid info");
  });

}
twowheeler(id,name,num){
  console.log(id)
  console.log(name)
  console.log(num)
  this.router.navigate(['/twowheeler',{customer_uuid:id,number:num,name:name}])
}

}