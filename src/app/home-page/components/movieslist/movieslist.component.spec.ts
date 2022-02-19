import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovieslistComponent } from './movieslist.component';

describe('MovieslistComponent', () => {
  let component: MovieslistComponent;
  let fixture: ComponentFixture<MovieslistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
