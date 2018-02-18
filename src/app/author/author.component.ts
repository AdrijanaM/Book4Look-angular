import { Component, OnInit, Input, Output} from '@angular/core';
import { Author} from '../author.interface';
import {AuthorService} from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;
  editing = false;
  editValue = '';

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.author.fullName;
  }


  onUpdate() { // save
    // this.authorService.updateAuthor(this.author.idauthor, this.editValue)
    //     .subscribe(
    //       (author: Author) => {
    //         this.author.name = this.editValue;
    //         this.editValue = '';
    //       }
    //     );
    // this.editing = false;
  }

}
