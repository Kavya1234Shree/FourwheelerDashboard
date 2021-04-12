import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDrivComponent } from './online-driv.component';

describe('OnlineDrivComponent', () => {
  let component: OnlineDrivComponent;
  let fixture: ComponentFixture<OnlineDrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
