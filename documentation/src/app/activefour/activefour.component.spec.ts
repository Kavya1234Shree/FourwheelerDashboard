import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivefourComponent } from './activefour.component';

describe('ActivefourComponent', () => {
  let component: ActivefourComponent;
  let fixture: ComponentFixture<ActivefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
