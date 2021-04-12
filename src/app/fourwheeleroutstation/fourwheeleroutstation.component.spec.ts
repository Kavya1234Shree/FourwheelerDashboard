import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourwheeleroutstationComponent } from './fourwheeleroutstation.component';

describe('FourwheeleroutstationComponent', () => {
  let component: FourwheeleroutstationComponent;
  let fixture: ComponentFixture<FourwheeleroutstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourwheeleroutstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourwheeleroutstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
