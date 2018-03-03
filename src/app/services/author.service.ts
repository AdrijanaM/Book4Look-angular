import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/RX';

@Injectable()
export class AuthorService {

    constructor(private http: Http, private userService: UserService) { }

    addAuthor(fullName: string) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ fullName: fullName });
        console.log('body:', body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/author?token=' + token, body, { headers: headers });
    }

    getAuthors(userId: number) {
        const token = this.userService.getToken();
        return this.http.get('http://localhost:8000/api/authors/' + userId + '?token=' + token)
            .map(
            (response: Response) => {
                return response.json().authors;
            }
            );
    }

    getAuthor(fullName: string) {
        const token = this.userService.getToken();
        return this.http.get('http://localhost:8000/api/author/' + fullName + '?token=' + token).map(
            (response: Response) => {
                return response.json().author;
            }
        );
    }

}
