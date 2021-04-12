import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingotp',
  templateUrl: './bookingotp.component.html',
  styleUrls: ['./bookingotp.component.scss'] 
})
export class BookingotpComponent implements OnInit {
  phone1 :string ='';

  constructor(private http: HttpClient,private router:Router,private route :ActivatedRoute) { }

  ngOnInit() {
    this.phone1 = this.route.snapshot.paramMap.get("phone");
    console.log(this.phone1)
  }
  onOtp(otp){
  
    this.http.post('http://165.22.219.195:4000/api/login',{phone:this.phone1,otp:otp},{responseType:'text'})
    .subscribe((data: any)=>{
      console.log(data);
      if (data=='{"login":{"status":"Incorrect OTP"}}'){
        alert("Incorrect OTP");
      }
      else{
        alert("Successfully Login")
        this.router.navigate(['/twowheeler']);
      }
      

     
      
    },(err:HttpErrorResponse) =>{
      alert("Incorrect OTP!!");
    
    
    });
  }
}
