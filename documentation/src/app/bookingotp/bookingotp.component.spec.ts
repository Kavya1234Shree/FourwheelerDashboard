import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingotpComponent } from './bookingotp.component';

describe('BookingotpComponent', () => {
  let component: BookingotpComponent;
  let fixture: ComponentFixture<BookingotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
