import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingloginComponent } from './bookinglogin.component';

describe('BookingloginComponent', () => {
  let component: BookingloginComponent;
  let fixture: ComponentFixture<BookingloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
