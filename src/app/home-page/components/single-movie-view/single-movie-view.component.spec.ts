import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieViewComponent } from './single-movie-view.component';

describe('SingleMovieViewComponent', () => {
  let component: SingleMovieViewComponent;
  let fixture: ComponentFixture<SingleMovieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
