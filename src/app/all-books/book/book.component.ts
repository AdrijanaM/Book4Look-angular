import { Component, OnInit, Input, Output } from '@angular/core';
import { Book} from '../../book.interface';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
