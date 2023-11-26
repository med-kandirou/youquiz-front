import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  getQuestions(page:number,size:number): Observable<Question[]> {
    return this.http.get<Question[]>(API_BASE_URL+`/api/Question?page=${page}&size=${size}`, { headers: { Accept: 'application/json' } });
  }

  delete(question_id:number): Observable<Question> {
    return this.http.delete<Question>(API_BASE_URL+`/api/Question/${question_id}`, { headers: { Accept: 'application/json' } });
  }
}
