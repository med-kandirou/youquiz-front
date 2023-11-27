import { Observable } from "rxjs";
import { Media } from "../models/Media.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "./api.config";


@Injectable({
    providedIn: 'root'
})
export class MediaService {

    constructor (private Http:HttpClient){}

    getMedias(page:number,size:number):Observable<Media[]>{
        return this.Http.get<Media[]>(API_BASE_URL+`/api/Media?page=${page}&size=${size}`,{ headers: { Accept: 'application/json' } });
    }

    delete(media_id:number):Observable<Media>{
        return this.Http.delete<Media>(API_BASE_URL+`/api/Media/${media_id}`,{ headers: { Accept: 'application/json' } });
    }

}
