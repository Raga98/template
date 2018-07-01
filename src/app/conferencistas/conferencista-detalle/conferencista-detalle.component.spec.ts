import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencistaDetalleComponent } from './conferencista-detalle.component';

describe('ConferencistaDetalleComponent', () => {
  let component: ConferencistaDetalleComponent;
  let fixture: ComponentFixture<ConferencistaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencistaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencistaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
