
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  // Get dashboard menu items
  public getDashboardMenu(): Observable<any> {
    return this.httpClient.get('./assets/json/dashboard.json');
  }


}
