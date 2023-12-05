import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';
import { Validation } from '../models/Validation.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http:HttpClient) { }

  getByQuestion(question_id:number){
    return this.http.get<Validation[]>(API_BASE_URL+`/api/Validation/byQuestion/${question_id}`, { headers: { Accept: 'application/json' } });
  }
}
