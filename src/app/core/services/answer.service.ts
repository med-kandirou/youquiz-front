import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from '../models/Assignment.model';
import { API_BASE_URL } from './api.config';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  constructor(private http: HttpClient,private fb:FormBuilder) { }

  save(validation_id: number, assignment_id: number): Observable<Assignment> {
    let form = this.fb.group({
      validation_id: validation_id,
      assignment_id: assignment_id,
    });
  
    return this.http.post<Assignment>(
      API_BASE_URL + `/api/Answer`,
      form.value,
      { headers: { Accept: 'application/json' } }
    );
  }
  
}
