// src/app/university.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8087/reservation';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }


  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, reservation);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
