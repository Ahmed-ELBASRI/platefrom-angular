import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUpdatedItemComponent } from './date-updated-item.component';

describe('DateUpdatedItemComponent', () => {
  let component: DateUpdatedItemComponent;
  let fixture: ComponentFixture<DateUpdatedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateUpdatedItemComponent]
    });
    fixture = TestBed.createComponent(DateUpdatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
