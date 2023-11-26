import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../models/Level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/api/Level';

  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.url, { headers: { Accept: 'application/json' } });
  }


}
