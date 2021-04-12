import { InterdialogComponent } from './../interdialog/interdialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
// import { InterdialogComponent } from '../interdialog/interdialog.component';

@Component({
  selector: 'app-interstate',
  templateUrl: './interstate.component.html',
  styleUrls: ['./interstate.component.scss']
})
export class InterstateComponent implements OnInit {


  public user:any;
  public phone:number;
   totalRec : number;
   page: number = 1;
   

  detail: any;
  FourIntr_uuid: string;
  constructor(private http:HttpClient, public matDialog :MatDialog) {

  }
  refresh() {
    window.location.reload();
  }
 ngOnInit() {
   let response= this.http.get("https://apis.zeiger.tech/api/inter-state")
   response.subscribe((data: any)=>{
     this.detail= data;
   console.log("interstate",this.detail);
   
 })

}
openModal(FourIntr_uuid ) {
 const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = true;
 dialogConfig.disableClose = true;
 dialogConfig.id = "modal-component";
 dialogConfig.height = "550px";
 dialogConfig.width = "1000px";
 dialogConfig.data =FourIntr_uuid;
 const modalDialog = this.matDialog.open(InterdialogComponent, dialogConfig);
} 
}