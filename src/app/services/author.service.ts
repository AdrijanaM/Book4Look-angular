import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/RX';

@Injectable()
export class AuthorService {
    constructor(private http: Http, private userService: UserService) { }

    addAuthor(name: string) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ name: name });
        console.log('body:', body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/author?token=' + token, body, { headers: headers });
    }

    getAuthors() {
        return this.http.get('http://localhost:8000/api/authors')
            .map(
            (response: Response) => {
                return response.json().authors;
            }
            );
    }

    updateAuthor(idAuthor: number, newName: string) {
        const body = JSON.stringify({ name: newName });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8000/api/author/' + idAuthor, body, { headers: headers })
            .map(
            (response: Response) => response.json()
            );
    }

}
