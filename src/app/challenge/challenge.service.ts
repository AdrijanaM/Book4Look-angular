import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChallengeService {

    private clock: Observable<Date>;
    constructor(private http: Http, private userService: UserService) {
        this.clock = Observable.interval(1000).map(tick => new Date()).share();
    }

    getClock(): Observable<Date> {
        return this.clock;
    }

    addChallenge(numberOfBooks: number, userEmail: string, userId: number) {
        const token = this.userService.getToken();
        const body = JSON.stringify({ numberOfBooks: numberOfBooks, userEmail: userEmail });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/challenge/' + userId + '?token=' + token, body, { headers: headers });
    }

}
