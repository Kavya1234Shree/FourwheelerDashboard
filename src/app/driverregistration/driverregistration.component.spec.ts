import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverregistrationComponent } from './driverregistration.component';

describe('DriverregistrationComponent', () => {
  let component: DriverregistrationComponent;
  let fixture: ComponentFixture<DriverregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
