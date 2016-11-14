import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: any = {};
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {

   }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];
      this.userService.getUserById(id)
        .then(user => this.user = user);
    });
  }


  update(user) {
    this.userService.updateUser(user).then(() => {
      this.router.navigate(['']);
    });
  }

}
