import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransSortComponent } from './trans-sort.component';

describe('TransSortComponent', () => {
  let component: TransSortComponent;
  let fixture: ComponentFixture<TransSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
