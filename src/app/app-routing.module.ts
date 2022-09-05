import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { UpdateListComponent } from './pages/update-list/update-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'new-ticket', component: NewListComponent },
  { path: 'ticket/getall', component: TaskviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-task', component: UpdateListComponent },
  { path: 'ticket/:id', component: UpdateListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
