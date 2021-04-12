import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowheelOnlineregistrationComponent } from './twowheel-onlineregistration.component';

describe('TwowheelOnlineregistrationComponent', () => {
  let component: TwowheelOnlineregistrationComponent;
  let fixture: ComponentFixture<TwowheelOnlineregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowheelOnlineregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowheelOnlineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
