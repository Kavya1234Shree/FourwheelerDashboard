import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpGetComponent } from './otp-get.component';

describe('OtpGetComponent', () => {
  let component: OtpGetComponent;
  let fixture: ComponentFixture<OtpGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
