import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencistasDashComponent } from './conferencistas-dash.component';

describe('ConferencistasDashComponent', () => {
  let component: ConferencistasDashComponent;
  let fixture: ComponentFixture<ConferencistasDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencistasDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencistasDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
