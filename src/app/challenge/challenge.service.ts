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

    addChallenge(numberOfBooks: number, userEmail: string) {
        const token = this.userService.getToken();
        const params = { numberOfBooks: numberOfBooks, userEmail: userEmail };
        const body = JSON.stringify(params);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/challenge?token=' + token, body, { headers: headers });
    }

    getChallenges(userId: number) {
        const token = this.userService.getToken();
        return this.http.get('http://localhost:8000/api/challenges/' + userId + '?token=' + token)
            .map(
            (response: Response) => {
                // console.log(response);
                return response.json().challenges;
            });
    }

    // inboxNumber() {
    //    return this.getChallenges.length;
    // }


    deleteChallenge(id: number) {
        const token = this.userService.getToken();
        return this.http.delete('http://127.0.0.1:8000/api/challenge/' + id + '?token=' + token);
    }


}
