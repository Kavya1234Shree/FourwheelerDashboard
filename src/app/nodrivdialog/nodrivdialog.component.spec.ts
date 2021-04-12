import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodrivdialogComponent } from './nodrivdialog.component';

describe('NodrivdialogComponent', () => {
  let component: NodrivdialogComponent;
  let fixture: ComponentFixture<NodrivdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodrivdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodrivdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
