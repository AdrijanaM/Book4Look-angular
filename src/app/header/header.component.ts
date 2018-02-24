import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../quote.interface';
import { User } from '../user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quotes: Quote[];
  user: User;
  userEmail: string;

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
    this.userEmail = this.userService.getUserEmail();
  }

}
