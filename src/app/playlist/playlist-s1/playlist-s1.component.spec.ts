import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistS1Component } from './playlist-s1.component';

describe('PlaylistS1Component', () => {
  let component: PlaylistS1Component;
  let fixture: ComponentFixture<PlaylistS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
