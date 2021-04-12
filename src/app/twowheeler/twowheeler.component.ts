import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder,FormGroup,FormArray} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { MatSpinner } from '@angular/material';

declare const google: any;

@Component({      
  selector: 'app-twowheeler', 
  templateUrl: './twowheeler.component.html', 
  styleUrls: ['./twowheeler.component.scss'] 
})
export class TwowheelerComponent implements OnInit {
  // buttonnnShowHide:true;
  // buttonShowHide:false;
  private url = 'http://165.22.219.195:4000';
  socket: SocketIOClient.Socket;
 
  bookingForm: FormGroup;


  selectpackages = new FormControl();
  packingList: string[] = ['BOOKS', 'ELECTRONICS ITEMS', 'CLOTH', 'FOOD', 'SPORTS AND OTHER EQUIPMENT', 'HOUSEHOLD ITEMS'];
 

  Twowheeler:string = "TwoWheeler";


  public latitude: number;
  public longitude: number;
  public pickupaddress: any;
  public zoom: number;

  dir = undefined;
  
  public latitude1: number;
  public longitude1: number;
  public dropaddress: any;
  public zoom1: number;

  

  landmark_for_delievery: FormControl;
  amount:  any;



  @ViewChild("search",{static:true})
  public searchElementRef: ElementRef;
  @ViewChild("destination",{static:true})
  public searchElementRef1: ElementRef;
  direction: any;
  duration: any;
  distance: any;
  srclat: any;
  srclng: any;
  dstlat: any;
  dstlng: any;
  km: number;
  amount1: any;

  amount_int: string;
  cusid:string;
  cusname:string;
  cusnum:string;
google:any;


  constructor(private http:HttpClient,private https:Http,private router:Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public zone:NgZone,
    private Rout:ActivatedRoute
   
  ) {
    this.zone.runOutsideAngular(() => {
      this.socket = io(this.url);
     }) 

     this.socket.on('connect', ()=>{
      this.zone.run(()=>{
       console.log("connected");
      
    });
  
     });

    

  }
  


  ngOnInit() {
   
this.cusid = this.Rout.snapshot.paramMap.get('customer_uuid');
this.cusname = this.Rout.snapshot.paramMap.get('name');
this.cusnum = this.Rout.snapshot.paramMap.get('number');
console.log(this.cusid+this.cusname+this.cusnum)



    this.bookingForm = new FormGroup({
      pickupaddress: new FormControl(),
      dropaddress: new FormControl(),
      selectpackages : new FormControl(),
      landmark_for_delievery: new FormControl(),
      amount: new FormControl()
      
   });
  
     

       
       //set current position
       this.setCurrentPosition();
       
       //load Places Autocomplete
       this.mapsAPILoader.load().then(() => {
         let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          //  types: ["address"]  
          types: []
         });
         autocomplete.addListener("place_changed", () => {
           this.ngZone.run(() => {
             //get the place result
             let place: google.maps.places.PlaceResult = autocomplete.getPlace();
             this.pickupaddress= place.formatted_address
             this.getamount()
             console.log(this.pickupaddress)
     
             //verify result
             if (place.geometry === undefined || place.geometry === null) {
               return;
             }
           
             //set latitude, longitude and zoom
             this.latitude = place.geometry.location.lat();
             this.longitude = place.geometry.location.lng();
             this.zoom = 12;
            
           });
         });
       });
   
      //  this.searchControl1= new FormControl();
   
     this.setCurrentPosition1();
   
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef1.nativeElement, {
      //  types: ["address"]
      // componentRestrictions:{'country':'IN'},
      types: []
     });
     autocomplete.addListener("place_changed", () => {
       this.ngZone.run(() => {
         //get the place result
         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //  console.log(place)
         this.dropaddress = place.formatted_address
         this.getamount()
         console.log(this.dropaddress)
         //verify result
         if (place.geometry === undefined || place.geometry === null) {
           return;
         }
       
         //set latitude, longitude and zoom
         this.latitude1 = place.geometry.location.lat();
         this.longitude1 = place.geometry.location.lng();
         this.zoom = 12;
        
       });
     });
   });

      
}


private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
    });
  }
}

private setCurrentPosition1() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude1= position.coords.latitude;
      this.longitude1= position.coords.longitude;
      this.zoom = 12;
    });
  }
}


getamount(){
  if(this.pickupaddress && this.dropaddress){
    console.log("true condition")
    console.log(this.pickupaddress);
    console.log(this.dropaddress);
    
    this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin="+this.pickupaddress+"&destination="+this.dropaddress+"&key=AIzaSyB3zd0VbcAseQlTHqUJ1XLBSNTpSIi3I4s")
    .subscribe(data=>{


      this.direction = data['routes'];
      this.distance = this.direction[0].legs[0].distance.text;
      this.duration = this.direction[0].legs[0].duration.text;
      this.srclat = this.direction[0].legs[0].start_location.lat;
      this.srclng = this.direction[0].legs[0].start_location.lng;
      this.dstlat = this.direction[0].legs[0].end_location.lat;
      this.dstlng = this.direction[0].legs[0].end_location.lng;
      this.km = parseFloat(this.distance.replace(/,/g, ''));
      this.amount1 =this.km * 14 ;
      this.amount_int = parseInt(this.amount1) +" Rs"
      console.log("km1 ",this.km);
      console.log("amount ",this.amount_int);
      this.amount=this.amount_int
      console.log(this.amount);
      console.log(data)
     
    })
  }
}
  

public getDirection( ) {

  console.log("pickupaddress "+this.latitude,this.longitude);
  console.log("dropaddress"+this.latitude1, this.longitude1 );
  this.dir = {
    origin: { lat: this.latitude , lng: this.longitude },
    destination : { lat: this.latitude1, lng: this.longitude1}
   


  }
  this.onSubmit()

 
}

onSubmit():void{
 

this.socket.emit('web',{
  
      custid:this.cusid,
      km1:this.km ,
      duration:this.duration,
      pickupaddress:this.pickupaddress,
      type_of_vehicle:this.Twowheeler,
      pickupaddresslat:this.latitude,
      pickupaddresslong: this.longitude,
      deliveryaddress:this.dropaddress,
      deliveryaddresslat:this.latitude1,
      deliveryaddresslong:this.longitude1,
      contactname:this.cusname,
      contactnumber:this.cusnum,
      package:this.bookingForm.value.selectpackages[0],
     landmark:this.bookingForm.value.landmark_for_delievery,
    amount:this.bookingForm.value.amount
         
   
          
});

console.log(this.bookingForm.value);
console.log(this.cusid);
console.log(this.cusname);
console.log(this.cusnum);


this.socket.on('driverweb',(data1,data2)=>{
  console.log(data1);
  console.log(data2);
  console.log(data2.driver.driver_name);
  console.log(data2.driver.phone);
  console.log(data2.driver.profile_photo);
  console.log(data2.driver.vehicle_number);
 
});

}

}
