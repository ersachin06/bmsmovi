import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDispMoviesComponent } from './admin-disp-movies.component';

describe('AdminDispMoviesComponent', () => {
  let component: AdminDispMoviesComponent;
  let fixture: ComponentFixture<AdminDispMoviesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDispMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDispMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
