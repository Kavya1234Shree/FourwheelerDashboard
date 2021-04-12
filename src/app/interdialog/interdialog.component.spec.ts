import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterdialogComponent } from './interdialog.component';

describe('InterdialogComponent', () => {
  let component: InterdialogComponent;
  let fixture: ComponentFixture<InterdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
