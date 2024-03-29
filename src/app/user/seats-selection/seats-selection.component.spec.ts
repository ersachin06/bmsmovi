import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatsSelectionComponent } from './seats-selection.component';

describe('SeatsSelectionComponent', () => {
  let component: SeatsSelectionComponent;
  let fixture: ComponentFixture<SeatsSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
