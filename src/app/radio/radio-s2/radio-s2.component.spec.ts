import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioS2Component } from './radio-s2.component';

describe('RadioS2Component', () => {
  let component: RadioS2Component;
  let fixture: ComponentFixture<RadioS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
