import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../user.interface';
import { Book } from '../book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  books: Book[];
  constructor(private authorService: AuthorService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.onGetUser();
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

  onGetUser() {
    this.userService.getCurrentUser().subscribe(
      (user: User) => this.user = user,
      (error: Response) => console.log(error)
    );
  }

  noToken() {
    if (this.userService.getToken() == null) {
      this.router.navigate(['']);
    }
  }


}
