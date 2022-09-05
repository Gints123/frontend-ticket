import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('id'));

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onUpdate(u: any) {
    console.log(u.value);
    this.route.params.subscribe((params: Params) => {
      this.taskService.updateTask(params.id, u.value).subscribe((response: any) => {
        console.log(response);
      })
    }
    )
    await this.delay(50)
    this.router.navigateByUrl('/ticket/getall');
  }
}
