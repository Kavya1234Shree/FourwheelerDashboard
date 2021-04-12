import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowheelDialogComponent } from './twowheel-dialog.component';

describe('TwowheelDialogComponent', () => {
  let component: TwowheelDialogComponent;
  let fixture: ComponentFixture<TwowheelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowheelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowheelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
