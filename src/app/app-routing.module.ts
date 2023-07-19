import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetaiComponent } from './books/book-detai/book-detai.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"books",component:BookListComponent},
  {path:"books/:id",component:BookDetaiComponent},
  {path:"",component:BookListComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
