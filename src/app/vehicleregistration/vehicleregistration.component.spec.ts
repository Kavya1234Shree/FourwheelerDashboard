import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleregistrationComponent } from './vehicleregistration.component';

describe('VehicleregistrationComponent', () => {
  let component: VehicleregistrationComponent;
  let fixture: ComponentFixture<VehicleregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
