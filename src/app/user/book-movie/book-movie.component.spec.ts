import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookMovieComponent } from './book-movie.component';

describe('BookMovieComponent', () => {
  let component: BookMovieComponent;
  let fixture: ComponentFixture<BookMovieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
