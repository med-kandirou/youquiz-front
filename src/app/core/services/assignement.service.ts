import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models/Assignment.model';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class AssignementService{

  constructor(private http:HttpClient) { }

  getByStudent(student_id:number,isPassed:boolean):Observable<Assignment[]>{
    return this.http.get<Assignment[]>(API_BASE_URL+`/api/Assignment/byStudent/${student_id}/${isPassed}` ,{ headers: { Accept: 'application/json' } });
  }

}
