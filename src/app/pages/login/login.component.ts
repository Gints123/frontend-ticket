import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  userLogin() {
    console.log(this.user);
    this.requestService.loginUser(this.user).subscribe(data => {
      alert("Login success")
    }, error=>alert("Lūdzu ievadiet pareizos ielogošanos datus"))
  }
}
