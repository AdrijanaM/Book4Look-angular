import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from '../services/user.service';
// import {Observable} from 'rxjs/RX';

@Injectable()
export class QuoteService {
    constructor(private http: Http, private userService: UserService) { }

    addQuote(content: string) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ content: content });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/quote?token=' + token, body, { headers: headers });
    }

    getQuotes() {
        return this.http.get('http://localhost:8000/api/quotes')
            .map(
            (response: Response) => {
                return response.json().quotes;
            }
            );
    }

    updateQuote(id: number, newContent: string) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ content: newContent });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8000/api/quote/' + id + '?token=' + token, body, { headers: headers })
            .map(
            (response: Response) => response.json()
            );
    }

    deleteQuote(id: number) {
        const token = this.userService.getToken();
        return this.http.delete('http://127.0.0.1:8000/api/quote/' + id + '?token=' + token);
    }
}
