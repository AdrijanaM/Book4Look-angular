import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  books: Book[];
  book: Book;
  // @Input() book: Book;
  // @Output() bookGeted = new EventEmitter<Book>(); // an event


  constructor(private bookService: BookService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onBookSubmit(form: NgForm) {
    this.bookService.addBook(form.value.title)
      .subscribe(
      () => alert('Searched book was found')
      );
    this.onGetBook(form);
    form.reset();
  }

  onGetBook(form: NgForm) {
    this.bookService.getBook(form.value.title)
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
