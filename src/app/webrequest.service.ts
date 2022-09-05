import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  readonly root_url;
  constructor(private http: HttpClient) { 
    this.root_url = 'http://localhost:8080';
  }

  get(uri: string) {
    return this.http.get(`${this.root_url}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.root_url}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.root_url}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.root_url}/${uri}`);
  }
}
