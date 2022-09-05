import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseurl="http://localhost:8080/login";
  constructor(private webReqService: WebrequestService, private http: HttpClient) { }

  createlist(body: any) {
    return this.webReqService.post('ticket/add', body);
  }

  getRequests() {
    return this.webReqService.get('ticket/getall');
  }

  deleteTask(id: String) {
    return this.webReqService.delete(`ticket/${id}`);
  }

  updateTask(id: string, body: any) {
    return this.webReqService.put(`ticket/${id}`, body);
  }

  loginUser(user: User):Observable<object>{
    return this.webReqService.post(`login`, user);
  }
}
