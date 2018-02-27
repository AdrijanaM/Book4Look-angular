import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import { ChallengeService } from '../challenge/challenge.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  countdown: number;
  time: Date;
  date: Date;

  constructor(private challengeService: ChallengeService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.challengeService.getClock().subscribe(time => this.time = time);
  }

  onSubmit(form: NgForm) {
    this.challengeService.addChallenge(form.value.numberOfBooks, form.value.userEmail, this.userService.getUserId())
      .subscribe(
      () => alert('Challenge created')
      );
      console.log(form.value.numberOfBooks + '-' + form.value.userEmail + '-' + this.userService.getUserId());
    form.reset();
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
