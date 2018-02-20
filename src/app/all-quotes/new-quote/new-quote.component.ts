import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {QuoteService } from '../../services/quote.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.quoteService.addQuote(form.value.content)
    .subscribe(
      () => alert('Quote created')
    );
    form.reset();
  }


  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
