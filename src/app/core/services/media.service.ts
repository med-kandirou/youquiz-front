import { Observable } from "rxjs";
import { Media } from "../models/Media.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "./api.config";
import { FormGroup } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class MediaService {
    constructor (private Http:HttpClient){}
    
    getOne(level_id: number) {
        return this.Http.get<Media>(API_BASE_URL+`/api/Media${level_id}`,{ headers: { Accept: 'application/json' } });
    }

    save(form: FormGroup) {
        return this.Http.post<Media>(API_BASE_URL+`/api/Media`,form,{ headers: { Accept: 'application/json' } });
    }
    

    getMedias(page:number,size:number):Observable<Media[]>{
        return this.Http.get<Media[]>(API_BASE_URL+`/api/Media?page=${page}&size=${size}`,{ headers: { Accept: 'application/json' } });
    }

    delete(media_id:number):Observable<Media>{
        return this.Http.delete<Media>(API_BASE_URL+`/api/Media/${media_id}`,{ headers: { Accept: 'application/json' } });
    }

}
