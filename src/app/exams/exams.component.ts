import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

export interface books {
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String
}


@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.css']
  })
  export class ExamsComponent implements OnInit {

    private bookData:books[] = [];
    private errorMessage:any = '';

      ngOnInit(){
          this.getBookData();
      }

      constructor(public bookservice : BookService){

      }

      public getBookData(): void {
        this.bookservice.getBooks()
          .map(response => response)
          .subscribe(allbooks => this.bookData = allbooks, 
                     error => this.errorMessage = <any>error);
      }
    
  }