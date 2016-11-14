import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: Promise<any[]>;
  constructor(
    private userService: UserService
  ) { }

 
  ngOnInit(): void {
      this.users = this.userService.getUser();
    }

  delete(user) {
    let cnf = confirm('Are you sure?');
    if (cnf) {
      this.userService.deleteUser(user.id).then(() =>{
        this.users = this.userService.getUser();
      });

    }
  }
}
