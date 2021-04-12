import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourActiveDialogComponent } from './four-active-dialog.component';

describe('FourActiveDialogComponent', () => {
  let component: FourActiveDialogComponent;
  let fixture: ComponentFixture<FourActiveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourActiveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourActiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
