import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenciasDashComponent } from './conferencias-dash.component';

describe('ConferenciasDashComponent', () => {
  let component: ConferenciasDashComponent;
  let fixture: ComponentFixture<ConferenciasDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenciasDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenciasDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
