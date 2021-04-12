import { OnlineDrivComponent } from './../../online-driv/online-driv.component';
import { CusListComponent } from './../../cus-list/cus-list.component';
import { OfflineDrivComponent } from './../../offline-driv/offline-driv.component';
import { OtpGetComponent } from './../../otp-get/otp-get.component';
import { NodriverComponent } from './../../nodriver/nodriver.component';
import { Moverspackers1Component } from './../../moverspackers1/moverspackers1.component';
import { TransactionhistoryComponent } from './../../transactionhistory/transactionhistory.component';
import { VendorListComponent } from './../../vendor-list/vendor-list.component';
import { InterstateComponent } from './../../interstate/interstate.component';
import { DeactivateComponent } from './../../deactivate/deactivate.component';
import { TransSortComponent } from './../../trans-sort/trans-sort.component';
import { CancelOrderComponent } from './../../cancel-order/cancel-order.component';
 import { LoginComponent } from './../../login/login.component';
import { MapComponent } from './../../map/map.component';
import { AuthGuard } from './../../authguard.guard';
import { FourwheelerdriverComponent } from './../../fourwheelerdriver/fourwheelerdriver.component';
import { FourwheeleroutstationComponent } from './../../fourwheeleroutstation/fourwheeleroutstation.component';
import { ActivefourComponent } from './../../activefour/activefour.component';
import { RegOnlineComponent } from './../../reg-online/reg-online.component';

import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { VenderregistrationComponent} from '../../venderregistration/venderregistration.component';
import { DriverregistrationComponent} from '../../driverregistration/driverregistration.component';

import { BookingComponent } from 'app/booking/booking.component';
// import { TwowheelerComponent } from 'app/twowheeler/twowheeler.component';
import { FourwheelerComponent } from 'app/fourwheeler/fourwheeler.component';
// import { MoverspackersComponent } from 'app/moverspackers/moverspackers.component';
import { BookingotpComponent } from 'app/bookingotp/bookingotp.component';
import { BookingloginComponent } from 'app/bookinglogin/bookinglogin.component';
import { VehicleregistrationComponent } from 'app/vehicleregistration/vehicleregistration.component';
import { TwowheelerdriverregistrationComponent } from 'app/twowheelerdriverregistration/twowheelerdriverregistration.component';



export const AdminLayoutRoutes: Routes = [
    
    //  {path: 'login', component: LoginComponent},
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'vender',        component: VenderregistrationComponent,canActivate: [AuthGuard] },
    { path: 'driver',        component: DriverregistrationComponent,canActivate: [AuthGuard] },
    { path: 'booking',  component: BookingComponent,canActivate: [AuthGuard] },
    // { path: 'twowheeler',  component: TwowheelerComponent },
    { path: 'fourwheeler',  component: FourwheelerComponent },
    // { path: 'moverspackers',  component: MoverspackersComponent },
    {path: 'otp',  component: BookingotpComponent},
    {path: 'bookinglogin',  component: BookingloginComponent},
    {path: 'twowheelerregistration',  component: TwowheelerdriverregistrationComponent},
    {path:'vehicleregistration',component:VehicleregistrationComponent},
    {path:'reg-online',component:RegOnlineComponent,canActivate: [AuthGuard]},
    {path:'activefour', component:ActivefourComponent,canActivate: [AuthGuard]},
    {path: 'fourwheeleroutstation', component: FourwheeleroutstationComponent,canActivate: [AuthGuard]},
    {path: 'fourwheelerdriver', component: FourwheelerdriverComponent,canActivate: [AuthGuard]},
    {path:'map',component:MapComponent,canActivate: [AuthGuard]},
    {path:'cancel-order',component:CancelOrderComponent,canActivate: [AuthGuard]},
    {path:'trans-sort',component:TransSortComponent,canActivate: [AuthGuard]},
    {path:'deactivate',component:DeactivateComponent,canActivate: [AuthGuard]},
    {path:'interstate',component:InterstateComponent,canActivate: [AuthGuard]},
    {path:'vendor-list',component:VendorListComponent,canActivate: [AuthGuard]},
    {path:'interstate',component:InterstateComponent,canActivate: [AuthGuard]},
    {path:'transactionhistory',component:TransactionhistoryComponent,canActivate: [AuthGuard]},
    {path:'moverspackers1',component:Moverspackers1Component,canActivate: [AuthGuard]},
    {path:'nodriver',component:NodriverComponent,canActivate: [AuthGuard]},
    {path:'otp-get',component:OtpGetComponent,canActivate: [AuthGuard]},
    {path:'offline-driv',component:OfflineDrivComponent},
    {path:'online-driv',component:OnlineDrivComponent},
    {path:'cus-list',component:CusListComponent,canActivate: [AuthGuard]},

    { path: "**", redirectTo: "/" }
]; 
