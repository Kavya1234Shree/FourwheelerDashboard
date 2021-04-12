import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourwheelerdriverComponent } from './fourwheelerdriver.component';

describe('FourwheelerdriverComponent', () => {
  let component: FourwheelerdriverComponent;
  let fixture: ComponentFixture<FourwheelerdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourwheelerdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourwheelerdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
