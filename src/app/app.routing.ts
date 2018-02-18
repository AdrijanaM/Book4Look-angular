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

const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent },
    { path: 'new-quote', component: NewQuoteComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'new-author', component: NewAuthorComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'new-book', component: NewBookComponent },
    { path: 'books', component: BooksComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

