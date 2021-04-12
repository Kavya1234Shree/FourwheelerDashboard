import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivRegw4Component } from './driv-regw4.component';

describe('DrivRegw4Component', () => {
  let component: DrivRegw4Component;
  let fixture: ComponentFixture<DrivRegw4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivRegw4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivRegw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
