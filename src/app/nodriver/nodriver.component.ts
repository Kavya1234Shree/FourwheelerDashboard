import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NodrivdialogComponent } from '../nodrivdialog/nodrivdialog.component';
@Component({
  selector: 'app-nodriver',
  templateUrl: './nodriver.component.html',
  styleUrls: ['./nodriver.component.scss']
})
export class NodriverComponent implements OnInit {
detail:any;
trans_uuid: any;
status: any;

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
    let response= this.http.get("https://apis.zeigerapp.in/api/nodriver")
    response.subscribe((data: any)=>{
      this.detail= data;
    console.log("Nodriv",this.detail);
    
  })
 
 }
 openModal(trans_uuid ) {
  const dialogConfig = new MatDialogConfig();
 
  dialogConfig.disableClose = true;
  dialogConfig.disableClose = true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "800px";
  dialogConfig.width = "1000px";
  dialogConfig.data =trans_uuid;
  const modalDialog = this.matDialog.open(NodrivdialogComponent, dialogConfig);
 } 
 }
 