import { Component, OnInit } from '@angular/core';
import { NgForm, NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-moverspackers',
  templateUrl: './moverspackers.component.html',
  styleUrls: ['./moverspackers.component.scss']
})
export class MoverspackersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(twowheelerForm:NgForm):void{
console.log(twowheelerForm.value);
  }

}
