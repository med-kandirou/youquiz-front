import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Subject } from '../models/Subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }


  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(API_BASE_URL+`/api/Subject`, { headers: { Accept: 'application/json' } });
  }

  delete(subject_id:number): Observable<Subject> {
    return this.http.delete<Subject>(API_BASE_URL+`/api/Subject/${subject_id}`, { headers: { Accept: 'application/json' } });
  }
}
