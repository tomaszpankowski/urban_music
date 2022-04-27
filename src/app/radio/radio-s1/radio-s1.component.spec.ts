import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioS1Component } from './radio-s1.component';

describe('RadioS1Component', () => {
  let component: RadioS1Component;
  let fixture: ComponentFixture<RadioS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
