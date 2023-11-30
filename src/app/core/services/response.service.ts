import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  getOne(response_id: number) {
    return this.http.get<Response>(API_BASE_URL+`/api/Response/${response_id}`, { headers: { Accept: 'application/json' } });
  }

  constructor(private http:HttpClient) { }


  getResponses(page:number,size:number): Observable<Response[]> {
    return this.http.get<Response[]>(API_BASE_URL+`/api/Response?page=${page}&size=${size}`, { headers: { Accept: 'application/json' } });
  }

  delete(Response_id:number): Observable<Response> {
    return this.http.delete<Response>(API_BASE_URL+`/api/Response/${Response_id}`, { headers: { Accept: 'application/json' } });
  }

  save(form:FormData): Observable<Response> {
    return this.http.post<Response>(API_BASE_URL+`/api/Response`, form,{ headers: { Accept: 'application/json' } });
  }
}
