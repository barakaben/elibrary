import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[BookListComponent]
})
export class BooksModule { }
