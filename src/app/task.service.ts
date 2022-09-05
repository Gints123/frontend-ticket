import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

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
}
