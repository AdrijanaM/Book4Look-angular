import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthorService } from './services/author.service';
import 'rxjs/add/operator/map';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  logIn: any = false;

  constructor(private userService: UserService, private authorService: AuthorService) {
  }

  profile = {}; // user obj
  authorProfile = {};

  // loadUser() {
  //   this.userService.getUser().subscribe(data => {
  //     this.profile = data;
  //     console.log(this.profile);
  //   });
  // }

  isLogedIn() {
    // if (this.userService.getToken() == null) {

    // }
    // return
  }

  ngOnInit() {
    // this.userService.register(this.user.name, this.user.email, this.user.password);
  }


}
