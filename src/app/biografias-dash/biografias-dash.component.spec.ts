import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiasDashComponent } from './biografias-dash.component';

describe('BiografiasDashComponent', () => {
  let component: BiografiasDashComponent;
  let fixture: ComponentFixture<BiografiasDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiografiasDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografiasDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
