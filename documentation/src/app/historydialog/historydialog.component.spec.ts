import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydialogComponent } from './historydialog.component';

describe('HistorydialogComponent', () => {
  let component: HistorydialogComponent;
  let fixture: ComponentFixture<HistorydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
