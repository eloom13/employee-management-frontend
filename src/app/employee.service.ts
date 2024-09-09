import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiServerUrl = 'http://localhost:8080';

  constructor (private http: HttpClient) { }

  public getEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }
  
}
