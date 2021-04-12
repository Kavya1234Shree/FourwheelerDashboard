import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { PubNubAngular } from 'pubnub-angular2';
// import { PushNotificationsService } from './dashboard.service';
import { PushNotificationsService} from 'ng-push';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // private url = 'http://165.22.219.195:4000';
  // socket: SocketIOClient.Socket;
  // vendorcount:any;
  // ownercount:any;
  // drivercount:any;
  // onlinecount:any;
  // driver_online: any;

//   constructor(private http:HttpClient,private router:Router ,public zone:NgZone) { 
//     this.zone.runOutsideAngular(() => {
//    this.socket = io(this.url);
//   }) 
//    this.socket.on('connect', ()=>{
//     this.zone.run(()=>{
//      console.log("connected");
    
//   });

//    });


   
//      ////////online//////////
//      let resp= this.http.get("https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/api/driver-position/driver-online")
//      resp.subscribe((data: any)=>{
//         console.log(data) ;
//   this.driver_online= data.count ;
//   console.log(this.driver_online);
//        }  )
//   }
 

  
//   ngOnInit() 
//   {
//     this.socket.emit('event1', {
//       msg: 'Client to server, can you hear me server?'
//   });
//   this.socket.on('countonline',(data)=>{
//     this.zone.run(()=>{
//       this.onlinecount=data;
//       console.log('online',this.onlinecount);
  
//     })
   
//   });
  
//   this.socket.on('count1',(data)=>{
//     this.zone.run(()=>{
//       this.vendorcount=data;
  
//     })
   
//   });


//   this.socket.on('count2',(data)=>{
//     this.zone.run(()=>{
//       this.ownercount=data;
  
//     })
   
//   });

//   this.socket.on('count3',(data)=>{
//     this.zone.run(()=>{
//       this.drivercount=data;
  
//     })
   
//   });

//   // this.socket.on('countonline',(data)=>{
//   //   this.zone.run(()=>{
//   //     this.onlinecount=data;
//   //     console.log('online',this.onlinecount);
  
//   //   })
   
//   // });


// }
public driver_online: any;
 public driver_offline: any;
 public driver_two: any;
 public driver_four: any;
 public picked_up: any;
 public picking_up: any;
 pubnub = new PubNubAngular();

  constructor(private http:HttpClient,private router:Router,private _notificationService: PushNotificationsService,pubnub: PubNubAngular) {
    pubnub.init({
      publishKey: "pub-c-e1ff371c-75e5-4656-aa68-f8df1eb27da8",
      subscribeKey: "sub-c-924e0d28-3c2b-11ea-9443-9e82b35d3d47",
      secretKey: "sec-c-YWUzMzkyODctYTg0Ny00NTc0LWFjMDktNDcxNTAxMGMyNmM2"
      });

    this._notificationService.requestPermission();
    
    pubnub.addListener({
      status: function(st) {
          if (st.category === "PNConnectedCategory") {
              pubnub.publish({
                  message: 'Hello from the PubNub Angular2 SDK!',
                  channel: 'test'
            });
         }
      },
      message: (message)=> {
          console.log(message.message.content);
          let msg = message.message.content
           this.notify(msg);
      }
  });
 
  pubnub.subscribe({
     channels: ['notification']
  });
 



     ////////online//////////
    let resp= this.http.get("https://apis.zeiger.tech/api/driver-position/driver-online")
    resp.subscribe((data: any)=>{
       console.log(data) ;
 this.driver_online= data.count ;
 console.log(this.driver_online);
      }  )
      ////////offline//////////
      let response= this.http.get("https://apis.zeiger.tech/api/driver-position/driver-offline")
      
      response.subscribe((data: any)=>{
         console.log(data) ;
   this.driver_offline= data.count ;
   console.log(this.driver_offline);
        }  )
 ////////two-wheel-registered-driv//////////
        let respons= this.http.get("https://apis.zeiger.tech/api/driver-registration/driver-two")
      
        respons.subscribe((data: any)=>{
           console.log(data) ;
     this.driver_two= data.count ;
     console.log(this.driver_two);
          }  )
////////four-wheel-registered-driv//////////
let respon= this.http.get("https://apis.zeiger.tech/api/driver-registration/driver-four")
      
respon.subscribe((data: any)=>{
   console.log(data) ;
this.driver_four= data.count ;
console.log(this.driver_four);
  }  )
  ////////order picked up, going to deliver//////////
let respo= this.http.get("https://apis.zeiger.tech/api/driver-position/picked")
      
respo.subscribe((data: any)=>{
   console.log(data) ;
this.picked_up= data.count ;
console.log(this.picked_up);
  }  )
   ////////order accepted,going to pick up the oreder//////////
let res= this.http.get("https://apis.zeiger.tech/api/driver-position/picking")
      
res.subscribe((data: any)=>{
   console.log(data) ;
this.picking_up= data.count ;
console.log(this.picking_up);
  }  )
   
   }
   notify(msg){ //our function to be called on click
    let options = { //set options
      body: msg,
      icon: "assets/images/zeigericon.png" //adding an icon
    }
     this._notificationService.create('New Order', options).subscribe( //creates a notification
        res => console.log(res),
        err => console.log(err)
    );
  }
//    notify() {
//     let data: Array < any >= [];
//     data.push({
//         'title': 'One Order Recevied',
//         'alertContent': 'This is First Alert -- By Debasis Saha'
//     });
    
//     this._notificationService.generateNotification(data);
// }

   refresh() {
    window.location.reload();
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/login'])

  }
  // startAnimationForLineChart(chart){
  //     let seq: any, delays: any, durations: any;
  //     seq = 0;
  //     delays = 80;
  //     durations = 500;

  //     chart.on('draw', function(data) {
        // if(data.type === 'line' || data.type === 'area') {
        //   data.element.animate({
        //     d: {
        //       begin: 600,
        //       dur: 700,
        //       from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        //       to: data.path.clone().stringify(),
        //       easing: Chartist.Svg.Easing.easeOutQuint
        //     }
        //   });
        // } else if(data.type === 'point') {
        //       seq++;
      //         data.element.animate({
      //           opacity: {
      //             begin: seq * delays,
      //             dur: durations,
      //             from: 0,
      //             to: 1,
      //             easing: 'ease'
      //           }
      //         });
      //     }
      // });

      // seq = 0;
  // };
  // startAnimationForBarChart(chart){
  //     let seq2: any, delays2: any, durations2: any;

  //     seq2 = 0;
  //     delays2 = 80;
  //     durations2 = 500;
  //     chart.on('draw', function(data) {
  //       if(data.type === 'bar'){
  //           seq2++;
  //           data.element.animate({
  //             opacity: {
  //               begin: seq2 * delays2,
                // dur: durations2,
                // from: 0,
                // to: 1,
                // easing: 'ease'
              // }
            // });
        // }
      // });

  //     seq2 = 0;
  // };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      // const dataDailySalesChart: any = {
      //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      //     series: [
      //         [12, 17, 7, 17, 23, 18, 38]
      //     ]
      // };

    //  const optionsDailySalesChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
    //   }

    //   var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    //   this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    //   const dataCompletedTasksChart: any = {
    //       labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
    //       series: [
    //           [230, 750, 450, 300, 280, 240, 200, 190]
    //       ]
    //   };

    //  const optionsCompletedTasksChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

    //   var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    //   // start animation for the Completed Tasks Chart - Line Chart
    //   this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

  //     var datawebsiteViewsChart = {
  //       labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  //       series: [
  //         [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

  //       ]
  //     };
  //     var optionswebsiteViewsChart = {
  //         axisX: {
  //             showGrid: false
  //         },
  //         low: 0,
  //         high: 1000,
  //         chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
  //     };
  //     var responsiveOptions: any[] = [
  //       ['screen and (max-width: 640px)', {
  //         seriesBarDistance: 5,
  //         axisX: {
  //           labelInterpolationFnc: function (value) {
  //             return value[0];
  //           }
  //         }
  //       }]
  //     ];
  //     var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

  //     //start animation for the Emails Subscription Chart
  //     this.startAnimationForBarChart(websiteViewsChart);
  }




