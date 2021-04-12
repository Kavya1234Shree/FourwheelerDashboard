import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivRegw2Component } from './driv-regw2.component';

describe('DrivRegw2Component', () => {
  let component: DrivRegw2Component;
  let fixture: ComponentFixture<DrivRegw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivRegw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivRegw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
