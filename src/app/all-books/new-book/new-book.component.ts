import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Book } from '../../book.interface';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookTitle: string;
  book: Book;
  constructor(private bookService: BookService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onBookSubmit(form: NgForm) {
    this.bookService.addBook(form.value.title)
      .subscribe(
      () => alert('Book added')
      );
    this.bookTitle = form.value.title;
    form.reset();
  }

  onGetBook() {
    this.bookService.getBook(this.userService.getUserId(), this.bookTitle)
      .subscribe(
      (book: Book) => this.book = book,
      (error: Response) => console.log(error)
      );
  }


  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
