import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.interface';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

   noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
