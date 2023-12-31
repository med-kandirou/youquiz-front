import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';
import { Validation } from '../models/Validation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http:HttpClient) { }

  getByQuestion(question_id:number):Observable<Validation[]>{
    return this.http.get<Validation[]>(API_BASE_URL+`/api/Validation/byQuestion/${question_id}`, { headers: { Accept: 'application/json' } });
  }

  validateResponses(ids_validations:number[]):Observable<number>{
    return this.http.post<number>(API_BASE_URL+'/api/Validation/verifyResponses',{'ids_validations' :ids_validations},{ headers: { Accept: 'application/json' } });
  }
}
