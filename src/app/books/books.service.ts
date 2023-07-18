import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url='http://localhost:8000/api/v1';
  page:number=1;
  constructor(private http: HttpClient) { }

  getBooks(page=1){
    return this.http.get(this.url+'?page='+page);
  }
}
