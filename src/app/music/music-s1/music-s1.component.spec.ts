import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicS1Component } from './music-s1.component';

describe('MusicS1Component', () => {
  let component: MusicS1Component;
  let fixture: ComponentFixture<MusicS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
