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
  url = API_BASE_URL+'/api/Level';
  
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.url, { headers: { Accept: 'application/json' } });
  }


}
