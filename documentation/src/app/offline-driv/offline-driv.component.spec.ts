import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDrivComponent } from './offline-driv.component';

describe('OfflineDrivComponent', () => {
  let component: OfflineDrivComponent;
  let fixture: ComponentFixture<OfflineDrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineDrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineDrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
