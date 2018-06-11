import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDashComponent } from './contenido-dash.component';

describe('ContenidoDashComponent', () => {
  let component: ContenidoDashComponent;
  let fixture: ComponentFixture<ContenidoDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
