import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote.interface';
import { Response } from '@angular/http';
import { QuoteService } from '../../services/quote.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  constructor(private quoteService: QuoteService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onGetQuotes() {
    this.quoteService.getQuotes(this.userService.getUserId())
      .subscribe(
      (quotes: Quote[]) => this.quotes = quotes,
      (error: Response) => console.log(error)
      );
  }

  onDelete(quote: Quote) {
    const position = this.quotes.findIndex(
      (quoteEl: Quote) => {
        return quoteEl.id === quote.id;
      }
    );
    this.quotes.splice(position, 1);
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}

