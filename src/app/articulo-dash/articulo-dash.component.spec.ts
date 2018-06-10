import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDashComponent } from './articulo-dash.component';

describe('ArticuloDashComponent', () => {
  let component: ArticuloDashComponent;
  let fixture: ComponentFixture<ArticuloDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
