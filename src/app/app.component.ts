import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { ChallengesComponent } from './challenges/challenges.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private challengesComponent: ChallengesComponent) {
  }

  ngOnInit() {
    // this.userService.register(this.user.name, this.user.email, this.user.password);
    // this.challengesComponent.howManyChallenges();
  }

}
