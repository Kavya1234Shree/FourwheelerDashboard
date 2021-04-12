import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoversdialogComponent } from './moversdialog.component';

describe('MoversdialogComponent', () => {
  let component: MoversdialogComponent;
  let fixture: ComponentFixture<MoversdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoversdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoversdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
