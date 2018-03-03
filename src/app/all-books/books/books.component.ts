import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Book } from '../../book.interface';
import { BookService } from '../../services/book.service';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public onGetBooks() {
    this.bookService.getBooks(this.userService.getUserId())
      .subscribe(
      (books: Book[]) => this.books = books,
      (error: Response) => console.log(error)
      );
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
