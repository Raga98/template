import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiasComponent } from './grafias.component';

describe('GrafiasComponent', () => {
  let component: GrafiasComponent;
  let fixture: ComponentFixture<GrafiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
