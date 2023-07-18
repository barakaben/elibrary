import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookDetaiComponent } from './book-detai/book-detai.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetaiComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[BookListComponent]
})
export class BooksModule { }
