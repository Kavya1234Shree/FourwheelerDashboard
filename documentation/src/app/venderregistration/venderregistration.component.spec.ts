import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderregistrationComponent } from './venderregistration.component';

describe('VenderregistrationComponent', () => {
  let component: VenderregistrationComponent;
  let fixture: ComponentFixture<VenderregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
