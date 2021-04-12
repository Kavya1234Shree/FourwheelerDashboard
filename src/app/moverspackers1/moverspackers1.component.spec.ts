import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moverspackers1Component } from './moverspackers1.component';

describe('Moverspackers1Component', () => {
  let component: Moverspackers1Component;
  let fixture: ComponentFixture<Moverspackers1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moverspackers1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moverspackers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
