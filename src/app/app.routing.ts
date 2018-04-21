import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { QuotesComponent } from './all-quotes/quotes/quotes.component';
import { NewQuoteComponent } from './all-quotes/new-quote/new-quote.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { BooksComponent } from './all-books/books/books.component';
import { NewBookComponent } from './all-books/new-book/new-book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { NewChallengeComponent } from './new-challenge/new-challenge.component';


const APP_ROUTES: Routes = [

    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quotes', component: NewQuoteComponent },
    { path: 'authors', component: NewAuthorComponent },
    { path: 'books', component: NewBookComponent },
    { path: 'challenges', component: NewChallengeComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

