import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {AuthorService} from '../services/author.service';
import { Author } from '../author.interface';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  constructor(private authorService: AuthorService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public onGetAuthors() {
      this.authorService.getAuthors(this.userService.getUserId())
      .subscribe(
        (authors: Author[]) => this.authors = authors,
        (error: Response) => console.log(error)
      );
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
