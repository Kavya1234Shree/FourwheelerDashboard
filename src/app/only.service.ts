import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common'; 
@Injectable()
export class DriveronlyService {
//the URL of the REST API
private servUrl = "http://139.59.9.250:2390/api/driverfour";
constructor(private http: Http) { }
//method to get all employee
getEmployees(): Observable<Response> {
    return this.http.get(this.servUrl);
}
}