import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/RX';
import { User } from '../User';


@Injectable()
export class UserService {
    // user: User;
    constructor(private http: Http) { }

    register(name: string, email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user',
            {
                name: name,
                email: email,
                password: password
            },
            {
                headers: new Headers({
                    'X-Requested-With': 'XMLHttpRequest'
                })
            });
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user/signin',
            {
                email: email,
                password: password
            },
            {
                headers: new Headers({
                    'X-Requested-With': 'XMLHttpRequest'
                })
            })
            .map(
            (response: Response) => {
                const token = response.json().token;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return { token: token, decoded: JSON.parse(window.atob(base64)) };
            }
            ).do(
            tokenData => {
                localStorage.setItem('token', tokenData.token);
            }
            );
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

}
