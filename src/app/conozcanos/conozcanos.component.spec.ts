import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConozcanosComponent } from './conozcanos.component';

describe('ConozcanosComponent', () => {
  let component: ConozcanosComponent;
  let fixture: ComponentFixture<ConozcanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConozcanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConozcanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
