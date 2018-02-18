import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Book } from '../../book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  public onGetBooks() {
    this.bookService.getBooks()
      .subscribe(
      (books: Book[]) => this.books = books,
      (error: Response) => console.log(error)
      );
  }

}
