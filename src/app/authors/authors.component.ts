import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {AuthorService} from '../services/author.service';
import { Author } from '../author.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  public onGetAuthors() {
      this.authorService.getAuthors()
      .subscribe(
        (authors: Author []) => this.authors = authors,
        (error: Response) => console.log(error)
      );
  }

}
