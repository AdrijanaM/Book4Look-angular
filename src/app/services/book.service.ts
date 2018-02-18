import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {

  constructor(private http: Http) { }

    addBook(title: string) {
        const body = JSON.stringify({title: title});
        console.log('body:', body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8000/api/book', body, {headers: headers});
    }

    getBooks() {
        return this.http.get('http://localhost:8000/api/books')
        .map(
                (response: Response) => {
                    return response.json().authors;
                }
            );
    }

}
