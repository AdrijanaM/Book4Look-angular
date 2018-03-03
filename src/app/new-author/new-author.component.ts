import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Author } from '../author.interface';


@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  author: Author;
  authors: Author[];

  constructor(private authorService: AuthorService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authorService.addAuthor(form.value.fullName)
      .subscribe(
      () => alert('Searched author was found')
      );
    this.onGetAuthor(form);
    form.reset();
  }

  onGetAuthor(form: NgForm) {
    this.authorService.getAuthor(form.value.fullName)
      .subscribe(
      (author: Author) => this.author = author,
      (error: Response) => console.log(error)
      );
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
