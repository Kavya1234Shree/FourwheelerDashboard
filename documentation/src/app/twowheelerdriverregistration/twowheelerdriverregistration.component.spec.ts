import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowheelerdriverregistrationComponent } from './twowheelerdriverregistration.component';

describe('TwowheelerdriverregistrationComponent', () => {
  let component: TwowheelerdriverregistrationComponent;
  let fixture: ComponentFixture<TwowheelerdriverregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowheelerdriverregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowheelerdriverregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
