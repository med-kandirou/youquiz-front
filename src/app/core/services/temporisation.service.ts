import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temporisation } from '../models/temporisation.model';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class TemporisationService {

  constructor(private http:HttpClient) { }

  getByTest(test_id:number){
    return this.http.get<Temporisation[]>(API_BASE_URL+`/api/Temporisation/byTest/${test_id}`, { headers: { Accept: 'application/json' } });
  }
}
