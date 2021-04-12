import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  public iconUrl = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
  // public iconUrl1 = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  // public iconUrl2 = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
  public iconUrl3 = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
zoom: number;
latitude = '';
longitude = '';
public twowhl: any;
public offtwowhl: any;
public fourwhl: any;
public offfourwhl: any;
previous: any;
constructor(private httpClient: HttpClient) {}

 ngOnInit() {
  setInterval(()=>{

//   const resp1 = this.httpClient.get('https://apis.zeiger.tech/api/driver-position/two-whl')
//   resp1.subscribe((data: any) => {
//     console.log(data);
//   this.twowhl = data;
// })
// const resp2 = this.httpClient.get('https://apis.zeiger.tech/api/driver-position/offtwo-whl')
//   resp2.subscribe((data: any) => {
//     console.log(data);
//   this.offtwowhl = data;
// })
const resp3 = this.httpClient.get('https://apis.zeigerapp.in/api/driver-position/four-whl')
  resp3.subscribe((data: any) => {
    console.log(data);
  this.fourwhl = data;
  })
  const resp4 = this.httpClient.get('https://apis.zeigerapp.in/api/driver-position/offfour-whl')
  resp4.subscribe((data: any) => {
    console.log(data);
  this.offfourwhl = data;
  })
},5000)
 }
 refresh() {
  window.location.reload();
}

clickedMarker(infowindow) {
  if (this.previous) {
      this.previous.close();
  }
  this.previous = infowindow;
}
}