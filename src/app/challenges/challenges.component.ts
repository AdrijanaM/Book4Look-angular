import { Component, OnInit } from '@angular/core';
import { Challenge } from '../challenge.interface';
import { Response } from '@angular/http';
import { QuoteService } from '../services/quote.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ChallengeService } from '../challenge/challenge.service';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  challenges: Challenge[];

  constructor(private challengeService: ChallengeService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onGetChallenges() {
    this.challengeService.getChallenges(this.userService.getUserId())
      .subscribe(
      (challenges: Challenge[]) => this.challenges = challenges,
      (error: Response) => console.log(error)
      );
  }

  // howManyChallenges() {
  //   return this.challenges.length;
  // }

  onDelete(challenge: Challenge) {
    const position = this.challenges.findIndex(
      (challengeEl: Challenge) => {
        return challengeEl.id === challenge.id;
      }
    );
    this.challenges.splice(position, 1);
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }


}
