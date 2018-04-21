import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChallengeService } from '../challenge/challenge.service';


@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.css']
})
export class NewChallengeComponent implements OnInit {

  constructor(private challengeService: ChallengeService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.challengeService.addChallenge(form.value.numberOfBooks, form.value.userEmail)
      .subscribe(
      () => alert('Challenge sent!')
      );
    console.log(form.value.numberOfBooks + '-' + form.value.userEmail);
    form.reset();
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }

}
