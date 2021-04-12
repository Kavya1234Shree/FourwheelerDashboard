import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fourwheeleroutstation',
  templateUrl: './fourwheeleroutstation.component.html',
  styleUrls: ['./fourwheeleroutstation.component.scss']
})
export class FourwheeleroutstationComponent implements OnInit {

 uploadForm: FormGroup;

constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [''],
      address: this.formBuilder.group({
      address1: [''],
      city: ['']
    // gst: ['']
      }),
      company_name: [''],
      pan_number: [''],
      aadhar_number: [''],
      gstn:[''],
      bank_details: this.formBuilder.group({
        bank_name: [''],
        account_number: [''],
        ifsc_code: ['']
        }),
      });
  }

ngOnInit() {}

onSubmit() {
this.httpClient.post('https://zeigerapp.in/api/reference', this.uploadForm.value)
.subscribe(
  (res) => {
    console.log(res)
  },
  (err) => console.log(err)
);
  }
}

