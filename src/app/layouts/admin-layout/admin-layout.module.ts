import { CusListComponent } from './../../cus-list/cus-list.component';
import { OnlineDrivComponent } from './../../online-driv/online-driv.component';
import { OfflineDrivComponent } from './../../offline-driv/offline-driv.component';



import { OtpGetComponent } from './../../otp-get/otp-get.component';
import { NodriverComponent } from './../../nodriver/nodriver.component';
import { Moverspackers1Component } from './../../moverspackers1/moverspackers1.component';
import { TransactionhistoryComponent } from './../../transactionhistory/transactionhistory.component';
import { InterstateComponent } from './../../interstate/interstate.component';
import { VendorListComponent } from './../../vendor-list/vendor-list.component';
import { DeactivateComponent } from './../../deactivate/deactivate.component';
import { TransSortComponent } from './../../trans-sort/trans-sort.component';
import { CancelOrderComponent } from './../../cancel-order/cancel-order.component';
// import { LoginComponent } from './../../login/login.component';
import { AuthGuard } from './../../authguard.guard';


import { MapComponent } from './../../map/map.component';
import { FourwheelerdriverComponent } from './../../fourwheelerdriver/fourwheelerdriver.component';
import { FourwheeleroutstationComponent } from './../../fourwheeleroutstation/fourwheeleroutstation.component';
import { ActivefourComponent } from './../../activefour/activefour.component';
import {EmployeeService} from '../../app.service';
import { EmployeeServices } from '../../active.service';
import { DriveronlyService } from '../../only.service';
import {NgxPaginationModule} from 'ngx-pagination';


import { RegOnlineComponent } from './../../reg-online/reg-online.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
 import { DashboardComponent } from '../../dashboard/dashboard.component';
import { VenderregistrationComponent } from '../../venderregistration/venderregistration.component';
import { DriverregistrationComponent } from '../../driverregistration/driverregistration.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { BookingComponent } from 'app/booking/booking.component';
// import { TwowheelerComponent } from 'app/twowheeler/twowheeler.component';
import { FourwheelerComponent } from 'app/fourwheeler/fourwheeler.component';
// import { MoverspackersComponent } from 'app/moverspackers/moverspackers.component';
// import { HoulyrentalComponent } from 'app/houlyrental/houlyrental.component';
import { BookingotpComponent } from 'app/bookingotp/bookingotp.component';
import { BookingloginComponent } from 'app/bookinglogin/bookinglogin.component';
import {MatTreeModule} from '@angular/material/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
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
import { TwowheelerdriverregistrationComponent } from 'app/twowheelerdriverregistration/twowheelerdriverregistration.component';
import { VehicleregistrationComponent } from 'app/vehicleregistration/vehicleregistration.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    DateValueAccessorModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CdkTreeModule,
    MatTreeModule,
    MatTooltipModule,
    MatIconModule,
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
    MatProgressSpinnerModule,
    MatStepperModule,
    MatCheckboxModule,
    MatChipsModule,
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
    DragDropModule,
    Ng2SearchPipeModule ,
     ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
    NgxPaginationModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB3zd0VbcAseQlTHqUJ1XLBSNTpSIi3I4s',  libraries: ["places"]}),
    AgmDirectionModule
  ],
  declarations: [
     DashboardComponent,
     InterstateComponent,
    VenderregistrationComponent,
    DriverregistrationComponent,
    BookingComponent,
    // TwowheelerComponent,
    FourwheelerComponent,
    // MoverspackersComponent,
    BookingotpComponent,
    BookingloginComponent,
    TwowheelerdriverregistrationComponent,
    VehicleregistrationComponent,
    RegOnlineComponent,
    ActivefourComponent,
    FourwheeleroutstationComponent,
    FourwheelerdriverComponent,
    MapComponent,
    CancelOrderComponent,
    TransSortComponent,
    DeactivateComponent,
    VendorListComponent,
    InterstateComponent,
    TransactionhistoryComponent,
    Moverspackers1Component,
    NodriverComponent,
    OtpGetComponent,
    OfflineDrivComponent ,
    OnlineDrivComponent,
    CusListComponent
   
    // LoginComponent
    
 
  ],
 
  providers: [AuthGuard,EmployeeService,EmployeeServices,DriveronlyService]
 
})

export class AdminLayoutModule {}
