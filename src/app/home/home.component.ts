import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //  authorProfile = {};

  constructor(private authorService: AuthorService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authorService.addAuthor(form.value.name)
      .subscribe(
      // this.authorService.showAuthor(form.value.name),
      () => alert('Author added')
      );
    form.reset();
    this.router.navigate(['/authors']);
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }


}
