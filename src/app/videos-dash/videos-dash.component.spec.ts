import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDashComponent } from './videos-dash.component';

describe('VideosDashComponent', () => {
  let component: VideosDashComponent;
  let fixture: ComponentFixture<VideosDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
