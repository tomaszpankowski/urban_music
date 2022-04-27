import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicS2Component } from './music-s2.component';

describe('MusicS2Component', () => {
  let component: MusicS2Component;
  let fixture: ComponentFixture<MusicS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
