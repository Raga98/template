import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliografiasComponent } from './bibliografias.component';

describe('BibliografiasComponent', () => {
  let component: BibliografiasComponent;
  let fixture: ComponentFixture<BibliografiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliografiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
