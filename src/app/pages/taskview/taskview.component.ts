import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {


  lists: any;
  request: any;


  constructor(private taskSerivce: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.taskSerivce.getRequests().subscribe((lists: any) => {
      this.lists = lists;
    })


  }

  onDeleteTask(id: string) {
    this.taskSerivce.deleteTask(id).subscribe((response: any) => {
      console.log(response);
      this.ngOnInit;
    });
  }
}
