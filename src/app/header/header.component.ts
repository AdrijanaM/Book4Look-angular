import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../quote.interface';
import { User } from '../User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quotes: Quote[];
  user = {};
  constructor(private userService: UserService, private quoteService: QuoteService) { }

  ngOnInit() {
    // this.user = this.userService.getUserEmail();

  }

  showQuotes() {
    this.quoteService.getQuotes()
      .subscribe(
      (quotes: Quote[]) => this.quotes = quotes,
      (error: Response) => console.log(error)
      );
  }


  logOut() {
    this.userService.logout();
  }

  userName() {
    // return this.userService.getUserEmail();
    this.user = this.userService.getUserEmail();
     return this.user;
  }

}
