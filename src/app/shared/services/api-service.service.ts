import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../constant/config';

@Injectable({ providedIn: 'root' })
export class ApiService {

    headers = new HttpHeaders().set('Content-Type', 'application/json');
    fileHeader = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    constructor(
      private http: HttpClient
    ) { 

    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(APP_CONFIG.API_URL + `${path}`, { params });
    }

    put(path: string, body: object = {}): Observable<any> {
      return this.http.put(
        APP_CONFIG.API_URL + `${path}`,
        JSON.stringify(body), { headers: this.headers });
    }

    post(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any>
     {
       alert("post caled inside apiservice 2456 "+APP_CONFIG.API_URL+`${path}`);
      return this.http.post(
        APP_CONFIG.API_URL + `${path}`,
        JSON.stringify(body), { headers: this.headers, params });
      
     // return this.http.post(APP_CONFIG.API_URL + `${path}`,body);
    }

    delete(path): Observable<any> {
      return this.http.delete(
        APP_CONFIG.API_URL + `${path}`);
    }

    postImage(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http
        .post(APP_CONFIG.API_URL + `${path}`, body, { headers: this.fileHeader , params });
    }

}
