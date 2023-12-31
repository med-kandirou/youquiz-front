import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student.model';
import { API_BASE_URL } from './api.config';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  login(form: FormGroup): Observable<Student> {
    return this.http.post<Student>(API_BASE_URL+`/api/Student/login`,form , { headers: { Accept: 'application/json' } });
  }

}
