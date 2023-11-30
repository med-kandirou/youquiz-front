import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Question } from '../models/Question.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  update(form: FormGroup) {
    return this.http.put<Question>(API_BASE_URL+`/api/Question`,form ,{ headers: { Accept: 'application/json' } });
  }

  constructor(private http:HttpClient) { }


  getQuestions(page:number,size:number): Observable<Question[]> {
    return this.http.get<Question[]>(API_BASE_URL+`/api/Question?page=${page}&size=${size}`, { headers: { Accept: 'application/json' } });
  }

  delete(question_id:number): Observable<Question> {
    return this.http.delete<Question>(API_BASE_URL+`/api/Question/${question_id}`, { headers: { Accept: 'application/json' } });
  }

  save(form:FormGroup): Observable<Question> {
    return this.http.post<Question>(API_BASE_URL+`/api/Question`,form ,{ headers: { Accept: 'application/json' } });
  }

  getOne(question_id:number): Observable<Question> {
    return this.http.get<Question>(API_BASE_URL+`/api/Question/${question_id}` ,{ headers: { Accept: 'application/json' } });
  }
}
