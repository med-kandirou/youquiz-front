import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message.model';
import { API_BASE_URL } from './api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  getMessagesByRoom(salle_id: number): Observable<Message[]> {
    return this.http.get<Message[]>(API_BASE_URL+`/api/Salle/${salle_id}`,{ headers: { Accept: 'application/json' } });
  }

}
