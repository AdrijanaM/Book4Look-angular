import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onBookSubmit(form: NgForm) {
    this.bookService.addBook(form.value.title)
    .subscribe(
      () => alert('Book added')
    );
    form.reset();
  }

}
