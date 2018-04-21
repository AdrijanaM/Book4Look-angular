import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../quote.interface';
import { User } from '../user.interface';
import { ChallengesComponent } from '../challenges/challenges.component';
import { ChallengeService } from '../challenge/challenge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quotes: Quote[];
  user: User;
  userName: string;
  userId: number;
  numberOfChallenges: number;

  constructor(private userService: UserService, private quoteService: QuoteService, private challengesComponent: ChallengesComponent) { }

  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.onGetUser();

    // this.numberOfChallenges = this.challengesComponent.howManyChallenges();
  }

  onGetUser() {
    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.user = user,
          this.userName = user.name;
      },
      (error: Response) => console.log(error)
    );
  }

  // inbox() {
  //   this.numberOfChallenges = this.challengesComponent.howManyChallenges();
  //   return this.numberOfChallenges;
  // }

  // showQuotes() {
  //   this.quoteService.getQuotes(this.userService.getUserId())
  //     .subscribe(
  //     (quotes: Quote[]) => this.quotes = quotes,
  //     (error: Response) => console.log(error)
  //     );
  // }

  logOut() {
    this.userService.logout();
  }
}
