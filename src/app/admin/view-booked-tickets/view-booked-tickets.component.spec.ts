import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewBookedTicketsComponent } from './view-booked-tickets.component';

describe('ViewBookedTicketsComponent', () => {
  let component: ViewBookedTicketsComponent;
  let fixture: ComponentFixture<ViewBookedTicketsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
