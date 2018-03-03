import { Component, OnInit, Input, Output } from '@angular/core';
import { Author } from '../author.interface';
import { AuthorService } from '../services/author.service';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;

  constructor(private authorService: AuthorService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
