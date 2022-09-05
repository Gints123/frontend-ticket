import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onSubmit(f: any) {
    console.log(f.value);
    console.log(f.valid);
    this.taskService.createlist(f.value).subscribe((response: any) => {
      console.log(response);

    });

    await this.delay(50)
    this.router.navigateByUrl('/ticket/getall');
  }
}
