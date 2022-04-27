import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicS3Component } from './music-s3.component';

describe('MusicS3Component', () => {
  let component: MusicS3Component;
  let fixture: ComponentFixture<MusicS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
