import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUpdatedComponent } from './date-updated.component';

describe('DateUpdatedComponent', () => {
  let component: DateUpdatedComponent;
  let fixture: ComponentFixture<DateUpdatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateUpdatedComponent]
    });
    fixture = TestBed.createComponent(DateUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
