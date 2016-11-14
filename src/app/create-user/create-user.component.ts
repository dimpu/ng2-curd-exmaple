import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private router:Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  create(name: string, email: string, pass: string) {
    this.userService.createUser(name, email, pass).then(()=>{
      this.router.navigate(['']);
    });
  }

}
