import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistS2Component } from './playlist-s2.component';

describe('PlaylistS2Component', () => {
  let component: PlaylistS2Component;
  let fixture: ComponentFixture<PlaylistS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
