import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder,FormGroup,FormArray} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-fourwheeler',
  templateUrl: './fourwheeler.component.html',
  styleUrls: ['./fourwheeler.component.scss']
})
export class FourwheelerComponent implements OnInit {
  private url = 'http://165.22.219.195:4000';
  socket: SocketIOClient.Socket;

  public latitude: number;
  public longitude: number;
  public pickupaddress: any;
  public zoom: number;

  public latitude1: number;
  public longitude1: number;
  public dropaddress: any;
  public zoom1: number;

  selectpackages = new FormControl();
  packingList: string[] = ['BOOKS', 'ELECTRONICS ITEMS', 'CLOTH', 'FOOD', 'SPORTS AND OTHER EQUIPMENT', 'HOUSEHOLD ITEMS'];
  
  SelectTypeofGOODS = new FormControl();
  selectingList:string[] =[
'timber / plywood / laminate',
'electrical/electronics/home appliances',
'building / construction',
'catering / restauran/event',
'machine / equipments/ spare parts/ metals',
'textile / garments/ fashion accessories',
'furniture / home furnishing',
'ceramics / sanitary/ hardware',
'paper / printed materials / packagin',
'chemicals / paints',
'pharmacy / medical / healthcare/ fitness equipments',
'FMCG / food products',
'plastic / rubber',
'books / stationary / toys / gifts',
'houseware supplies' 

]
WhereYouWantToGo = new FormControl();
goingList: string[] = ['Within City','Outside City','Interstate'];
  
  bookingForm: FormGroup;
  customer_name: FormControl;
  customer_number:  FormControl;
  landmark_for_delievery: FormControl;
  amount:  FormControl;
  selectings:FormControl;
  goings:FormControl;
  dir = undefined;

  @ViewChild("search",{static:true})
  public searchElementRef: ElementRef;
  @ViewChild("destination",{static:true})
  public searchElementRef1: ElementRef;
 

  direction: any;
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


  constructor( private http:HttpClient,private router:Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public zone:NgZone
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





    this.bookingForm = new FormGroup({
      pick_address: new FormControl(),
      drop_address: new FormControl(),
      selectpackages : new FormControl(),
      customer_name: new FormControl(),
      selectings:new FormControl(),
      goings:new FormControl(),
      customer_number: new FormControl(),
      landmark_for_delievery: new FormControl(),
      amount: new FormControl()
     
   });


     this.setCurrentPosition();
     
     this.mapsAPILoader.load().then(() => {
       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: []
       });
       autocomplete.addListener("place_changed", () => {
         this.ngZone.run(() => {
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           this.pickupaddress=(place.formatted_address)
           this.getamount()
           console.log(this.pickupaddress)
   
           if (place.geometry === undefined || place.geometry === null) {
             return;
           }
         
           this.latitude = place.geometry.location.lat();
           this.longitude = place.geometry.location.lng();
           this.zoom = 12;
          
         });
       });
     });
 
 
   this.setCurrentPosition1();
 

  this.mapsAPILoader.load().then(() => {
   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef1.nativeElement, {
 
    types: []
   });
   autocomplete.addListener("place_changed", () => {
     this.ngZone.run(() => {
       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 this.dropaddress = place.formatted_address
 console.log(this.dropaddress)
 this.getamount()
       if (place.geometry === undefined || place.geometry === null) {
         return;
       }
     
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
    let header = new Headers();

    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    header.append('Origin','http://localhost:4000');


    if(this.pickupaddress && this.dropaddress){
      console.log("true condition")
      console.log(this.pickupaddress);
      console.log(this.dropaddress);
      
      this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyB3zd0VbcAseQlTHqUJ1XLBSNTpSIi3I4s",{headers:new HttpHeaders({'Content-Type':  'application/json'})})
      .subscribe(data=>{
  
  
        this.direction = data['routes'];
        this.distance = this.direction[0].legs[0].distance.text;
        this.srclat = this.direction[0].legs[0].start_location.lat;
        this.srclng = this.direction[0].legs[0].start_location.lng;
        this.dstlat = this.direction[0].legs[0].end_location.lat;
        this.dstlng = this.direction[0].legs[0].end_location.lng;
        this.km = parseFloat(this.distance.replace(/,/g, ''));
        this.amount1 =this.km * 14 ;
        this.amount_int = parseInt(this.amount1) +" Rs"
        console.log("km1 ",this.km);
        console.log("amount ",this.amount_int);
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
   
  }
  
  onSubmit():void{
    console.log(this.dropaddress)
  this.socket.emit('two',{pickupaddress:this.pickupaddress,
          pickupaddresslatlng:{lat:this.latitude,lng:this.longitude},
            dropaddress:this.dropaddress,
            dropaddresslatlng:{lat:this.latitude1,lng:this.longitude1},
            customer_name:this.bookingForm.value.customer_name,
            customer_number:this.bookingForm.value.customer_number,
            packing:this.bookingForm.value.selectpackages,
            landmark_for_delievery:this.bookingForm.value.landmark_for_delievery,
            amount:this.bookingForm.value.amount
  })
  console.log(this.bookingForm.value);
  }
  
}
