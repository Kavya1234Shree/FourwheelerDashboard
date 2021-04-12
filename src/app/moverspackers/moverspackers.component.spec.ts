import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverspackersComponent } from './moverspackers.component';

describe('MoverspackersComponent', () => {
  let component: MoverspackersComponent;
  let fixture: ComponentFixture<MoverspackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverspackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverspackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
