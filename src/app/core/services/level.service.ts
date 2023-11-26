import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Level } from '../models/Level.model';


@Injectable({
  providedIn: 'root',
})
export class LevelService {
  constructor(private http: HttpClient) { }
  
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(API_BASE_URL+'/api/Level', { headers: { Accept: 'application/json' } });
  }

  delete(level_id:number): Observable<Level> {
    return this.http.delete<Level>(API_BASE_URL+'/api/Level/'+level_id+'', { headers: { Accept: 'application/json' } });
  }
}
