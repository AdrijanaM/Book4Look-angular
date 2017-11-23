import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import {routing} from './app.routing';
import {QuoteService} from './quote.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
