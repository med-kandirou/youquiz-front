import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participate } from '../models/Participate.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(private http:HttpClient) { }


  findParticipatesByStudent(studentId:number,status:string): Observable<Participate[]> {
    return this.http.get<Participate[]>(API_BASE_URL+`/api/Participate/byStudent/${studentId}/${status}`, { headers: { Accept: 'application/json' } });
  }

  save(form:FormGroup): Observable<Participate> {
    return this.http.post<Participate>(API_BASE_URL+`/api/Participate`,form ,{ headers: { Accept: 'application/json' } });
  }
}
