import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Level } from '../models/Level.model';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class LevelService {


  getOne(level_id: number) {
    return this.http.get<Level>(API_BASE_URL+`/api/Level/${level_id}`, { headers: { Accept: 'application/json' } });
  }

  constructor(private http: HttpClient) { }
  
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(API_BASE_URL+'/api/Level', { headers: { Accept: 'application/json' } });
  }

  delete(level_id:number): Observable<Level> {
    return this.http.delete<Level>(API_BASE_URL+'/api/Level/'+level_id+'', { headers: { Accept: 'application/json' } });
  }

  save(form: FormGroup):Observable<Level>{
    return this.http.post<Level>(API_BASE_URL+'/api/Level', form,{ headers: { Accept: 'application/json' } });
  }
}
