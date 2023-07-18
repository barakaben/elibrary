import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-detai',
  templateUrl: './book-detai.component.html',
  styleUrls: ['./book-detai.component.css']
})
export class BookDetaiComponent {
  book:Book|any;
  
  constructor(private bookService:BooksService,private route:ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.bookService.getBook(params['id']).subscribe((res:any)=>{
       this.book=res;
      })
   })
  }
   
}
