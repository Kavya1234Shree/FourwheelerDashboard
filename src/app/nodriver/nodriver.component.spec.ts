import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodriverComponent } from './nodriver.component';

describe('NodriverComponent', () => {
  let component: NodriverComponent;
  let fixture: ComponentFixture<NodriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
