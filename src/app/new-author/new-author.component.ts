import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authorService.addAuthor(form.value.name)
    .subscribe(
      () => alert('Author added')
    );
    form.reset();
  }

}
