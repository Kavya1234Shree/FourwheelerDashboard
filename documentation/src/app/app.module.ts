// import { HistorydialogComponent } from 'app/historydialog/historydialog.component';
import { PubNubAngular } from 'pubnub-angular2';
// import { MapComponent } from './map/map.component';
// import { FourwheelerdriverComponent } from './fourwheelerdriver/fourwheelerdriver.component';
// import { ActivefourComponent } from './activefour/activefour.component';
// import { RegOnlineComponent } from './reg-online/reg-online.component';
// import { VenderregistrationComponent } from './venderregistration/venderregistration.component';
// import { DriverregistrationComponent } from './driverregistration/driverregistration.component';
// import { BookingComponent } from './booking/booking.component';
// import { AuthGuard } from './authguard.guard';
import { AgmCoreModule } from '@agm/core';
import { DialogDataExampleDialogComponent } from './dialog-data-example-dialog/dialog-data-example-dialog.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { DrivRegw2Component } from './driv-regw2/driv-regw2.component';
import { OnlineDrivComponent } from './online-driv/online-driv.component';
import { DrivRegw4Component } from './driv-regw4/driv-regw4.component';
import { AcceptedOrdersComponent } from './accepted-orders/accepted-orders.component';
import { PickedInfoComponent } from './picked-info/picked-info.component';
import { OfflineDrivComponent } from './offline-driv/offline-driv.component';
import {Routes } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

// import { JwPaginationComponent } from 'jw-angular-pagination';


import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { DashboardComponent } from './dashboard/dashboard.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
 import { LoginComponent } from './login/login.component';


import {  MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from  '@angular/material/dialog';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { FourActiveDialogComponent } from './four-active-dialog/four-active-dialog.component';
import { TwowheelDialogComponent } from './twowheel-dialog/twowheel-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { from } from 'rxjs';

import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { TransDialogComponent } from './trans-dialog/trans-dialog.component';
import { DeactivateDialogComponent } from './deactivate-dialog/deactivate-dialog.component';
import { VendorDialogComponent } from './vendor-dialog/vendor-dialog.component';
import { InterdialogComponent } from './interdialog/interdialog.component';
// import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { HistorydialogComponent } from './historydialog/historydialog.component';
// import { Moverspackers1Component } from './moverspackers1/moverspackers1.component';
import { MoversdialogComponent } from './moversdialog/moversdialog.component';
// import { NodriverComponent } from './nodriver/nodriver.component';
import { NodrivdialogComponent } from './nodrivdialog/nodrivdialog.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { PushNotificationsModule } from 'ng-push';
// import { VendorListComponent } from './vendor-list/vendor-list.component';
// import { InterstateComponent } from './interstate/interstate.component';
// import { DeactivateComponent } from './deactivate/deactivate.component';
// import { TransSortComponent } from './trans-sort/trans-sort.component';
// import { PaginationModule } from 'ng2-bootstrap/pagination';

// const appRoutes: Routes = [
//   {path: 'login', component: LoginComponent},
//   {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//   {path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
//   {path: 'driver' ,component: DriverregistrationComponent, canActivate: [AuthGuard] },
//   {path: 'venderregistration' ,component: VenderregistrationComponent, canActivate: [AuthGuard] },
//   {path: 'reg-online' ,component: RegOnlineComponent, canActivate: [AuthGuard] },
//   {path: 'activefour' ,component: ActivefourComponent, canActivate: [AuthGuard] },
//   {path: 'fourwheelerdriver' ,component: FourwheelerdriverComponent, canActivate: [AuthGuard] },
//   {path: 'map' ,component: MapComponent, canActivate: [AuthGuard] },
//   { path: "**", redirectTo: "/" }
// ];







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatDialogModule,
    PushNotificationsModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    MatMenuModule,
    MatTreeModule,
    CdkTreeModule,
    AppRoutingModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    PortalModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
    // RouterModule.forRoot(appRoutes),
    NgxImageZoomModule.forRoot(),
    NgbModule,
  
    // PaginationModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5AV2TzFasgwwZbVqqUD6eaCL0bE3ldIQ'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
     LoginComponent,
    DialogDataExampleDialogComponent,
    FourActiveDialogComponent,
    TwowheelDialogComponent,
    DrivRegw2Component,
    OnlineDrivComponent,
    DrivRegw4Component,
    AcceptedOrdersComponent,
    PickedInfoComponent ,
    OfflineDrivComponent,
    //  DashboardComponent,
    // BookingComponent,
  //  DriverregistrationComponent,
  //  VenderregistrationComponent,
    OwnerregistrationComponent,
   
    CancelDialogComponent,
   
    TransDialogComponent,
   
    DeactivateDialogComponent,
   
    VendorDialogComponent,
   
    InterdialogComponent,
   
    // TransactionhistoryComponent,
   
    HistorydialogComponent,
   
    // Moverspackers1Component,
   
    MoversdialogComponent,
   
    // NodriverComponent,
   
    NodrivdialogComponent,
   
    // VendorListComponent,
   
    // InterstateComponent,
   
    
   
    // TransSortComponent,
    // RegOnlineComponent,
    // ActivefourComponent,
    // FourwheelerdriverComponent,
    // MapComponent
    // JwPaginationComponent
    
    
   
    
 
  
   
  ],
  providers: [PubNubAngular,{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],
  

  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialogComponent,FourActiveDialogComponent,OwnerregistrationComponent,CancelDialogComponent,TransDialogComponent,DeactivateDialogComponent,VendorDialogComponent,InterdialogComponent,HistorydialogComponent,MoversdialogComponent,NodrivdialogComponent]
  
  
})
export class AppModule { }
