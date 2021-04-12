import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerregistrationComponent } from './ownerregistration.component';

describe('OwnerregistrationComponent', () => {
  let component: OwnerregistrationComponent;
  let fixture: ComponentFixture<OwnerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
