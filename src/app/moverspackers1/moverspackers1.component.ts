import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MoversdialogComponent } from '../moversdialog/moversdialog.component';
@Component({
  selector: 'app-moverspackers1',
  templateUrl: './moverspackers1.component.html',
  styleUrls: ['./moverspackers1.component.scss']
})
export class Moverspackers1Component implements OnInit {
detail:any;
movpck_uuid:any;

public user:any;
  public phone:number;
   totalRec : number;
   page: number = 1;
   
constructor(private http:HttpClient, public matDialog :MatDialog) {

}

refresh() {
  window.location.reload();
}
  ngOnInit() {
    let response= this.http.get("https://apis.zeigerapp.in/api/moverspackers")
    response.subscribe((data: any)=>{
      this.detail= data;
    console.log("moverspackers",this.detail);
    
  })
  }
  openModal(movpck_uuid ) {
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.disableClose = true;
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "1000px";
    dialogConfig.data =movpck_uuid;
     const modalDialog = this.matDialog.open(MoversdialogComponent, dialogConfig);
   } 
   
   }
  
