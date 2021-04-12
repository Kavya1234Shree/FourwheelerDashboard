import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedInfoComponent } from './picked-info.component';

describe('PickedInfoComponent', () => {
  let component: PickedInfoComponent;
  let fixture: ComponentFixture<PickedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
