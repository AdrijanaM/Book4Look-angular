import { Component, OnInit, Input, Output } from '@angular/core';
import { Book} from '../../book.interface';
import {BookService} from '../../services/book.service';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookService: BookService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }


}
