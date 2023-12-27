import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from '../models/Salle.model';
import { API_BASE_URL } from './api.config';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }

  getOne(salle_id: number): Observable<Salle> {
    return this.http.get<Salle>(API_BASE_URL+`/api/Salle/${salle_id}`,{ headers: { Accept: 'application/json' } });
  }

  save(form: FormGroup) : Observable<Salle>{
    return this.http.post<Salle>(API_BASE_URL+`/api/Salle`,form ,{ headers: { Accept: 'application/json' } });
  }
}
