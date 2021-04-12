import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegOnlineComponent } from './reg-online.component';

describe('RegOnlineComponent', () => {
  let component: RegOnlineComponent;
  let fixture: ComponentFixture<RegOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
