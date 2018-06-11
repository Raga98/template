import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDashComponent } from './libros-dash.component';

describe('LibrosDashComponent', () => {
  let component: LibrosDashComponent;
  let fixture: ComponentFixture<LibrosDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
