import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/RX';
import { User } from '../User';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
    userEmail: string;
    userId: number;
    user: User;
    tokenCreated: boolean;

    constructor(private http: Http, public router: Router) { }

    register(name: string, email: string, password: string) {
        this.router.navigate(['/login']);
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
                this.userEmail = response.json().email;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                const parsed = JSON.parse(window.atob(base64));
                const userId = (parsed[Object.keys(parsed)[0]]);
                // console.log('Logged USER ID: ' + this.userId);
                return { userEmail: email, token: token, userID: userId };
            }
            ).do(
            tokenData => {
                localStorage.setItem('token', tokenData.token);
                localStorage.setItem('email', tokenData.userEmail);
                localStorage.setItem('userId', tokenData.userID);
                // localStorage.setItem('decoded', tokenData.decoded);
                this.tokenCreated = true;
                this.router.navigate(['/home']);
            }
            );
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        this.tokenCreated = false;
        return localStorage.clear();
    }


    getUserId() {
        const userID = Number(localStorage.getItem('userId'));
        return userID;
    }

    getCurrentUser() {
        const token = this.getToken();
        return this.http.get('http://localhost:8000/api/getUser?token=' + token)
            .map(
            (response: Response) => {
                return response.json().user;
            }
            );
    }

}
