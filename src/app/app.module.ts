import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuoteComponent } from './all-quotes/quote/quote.component';
import { QuotesComponent } from './all-quotes/quotes/quotes.component';
import { NewQuoteComponent } from './all-quotes/new-quote/new-quote.component';
import { routing } from './app.routing';
import { QuoteService } from './services/quote.service';
import { UserService } from './services/user.service';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { ChallengeService } from './challenge/challenge.service';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './all-books/book/book.component';
import { BooksComponent } from './all-books/books/books.component';
import { NewBookComponent } from './all-books/new-book/new-book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { NewChallengeComponent } from './new-challenge/new-challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    NewAuthorComponent,
    AuthorComponent,
    AuthorsComponent,
    RegisterComponent,
    BookComponent,
    BooksComponent,
    NewBookComponent,
    WelcomeComponent,
    FooterComponent,
    ChallengeComponent,
    NewChallengeComponent,
    ChallengesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [QuoteService, UserService, AuthorService, BookService, ChallengeService, ChallengesComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
