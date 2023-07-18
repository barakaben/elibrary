import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetaiComponent } from './book-detai.component';

describe('BookDetaiComponent', () => {
  let component: BookDetaiComponent;
  let fixture: ComponentFixture<BookDetaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetaiComponent]
    });
    fixture = TestBed.createComponent(BookDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
