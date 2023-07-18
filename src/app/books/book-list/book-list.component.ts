import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  Books:any;
  allBooks:number=0;
  pagination:number=1;

  constructor(private booksService: BooksService){}

  ngOnInit(){
     this.getBooks();
  }

  getBooks(pagination=1){
    this.booksService.getBooks(pagination).subscribe((res:any)=>{
        this.Books=res.results;
        this.allBooks=res.count;
    });
  }

  renderPage(event:any=1){
    this.pagination=event;
    this.getBooks(this.pagination);
  }

}
