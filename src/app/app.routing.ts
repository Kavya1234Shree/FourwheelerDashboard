import { TwowheelDialogComponent } from './twowheel-dialog/twowheel-dialog.component';
import { FourActiveDialogComponent } from 'app/four-active-dialog/four-active-dialog.component';
import { DialogDataExampleDialogComponent } from './dialog-data-example-dialog/dialog-data-example-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DrivRegw4Component } from './driv-regw4/driv-regw4.component';
import { DrivRegw2Component } from './driv-regw2/driv-regw2.component';
import { OnlineDrivComponent } from './online-driv/online-driv.component';
import { AcceptedOrdersComponent } from './accepted-orders/accepted-orders.component';
import { OfflineDrivComponent } from './offline-driv/offline-driv.component';
import { PickedInfoComponent } from './picked-info/picked-info.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[

  { path: 'login',        component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: "dialog-data-example-dialog", component: DialogDataExampleDialogComponent },
  { path: "four-active-dialog", component: FourActiveDialogComponent },
  { path: "twowheel-dialog", component: TwowheelDialogComponent},
  // {
  //   path:'online-driv',
  //   component: OnlineDrivComponent
  // },
  // {
  //   path:'offline-driv',
  //   component: OfflineDrivComponent
  // },
  {
    path:'driv-regw2',
    component: DrivRegw2Component
  },
  {
    path:'driv-regw4',
    component: DrivRegw4Component
  },
  {
    path:'accepted-orders',
    component: AcceptedOrdersComponent
  },
  {
    path:'picked-info',
    component: PickedInfoComponent
  },
  

  
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
