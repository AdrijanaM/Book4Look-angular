import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Challenge } from '../challenge.interface';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import { ChallengeService } from '../challenge/challenge.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  countdown: number;
  time: Date;
  date: Date;
  @Input() challenge: Challenge;
  @Output() challengeDeleted = new EventEmitter<Challenge>(); // an event

  constructor(private challengeService: ChallengeService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.challengeService.getClock().subscribe(time => this.time = time);
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

   onDelete() {
    this.challengeService.deleteChallenge(this.challenge.id)
    .subscribe(
      () => {
        this.challengeDeleted.emit(this.challenge);
      }
    );
  }

}
