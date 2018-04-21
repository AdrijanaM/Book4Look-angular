import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {

    constructor(private http: Http, private userService: UserService) { }

    addBook(title: string) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ title: title });
        console.log('body:', body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/book?token=' + token, body, { headers: headers });
    }

    getBooks(userId: number) {
        const token = this.userService.getToken();
        return this.http.get('http://localhost:8000/api/books/' + userId + '?token=' + token)
            .map(
            (response: Response) => {
                return response.json().books;
            }
            );
    }

    getBook(title: string) {
        const token = this.userService.getToken();
        return this.http.get('http://localhost:8000/api/book/' + title + '?token=' + token).map(
            (response: Response) => {
                return response.json().book;
            }
        );
    }

}
