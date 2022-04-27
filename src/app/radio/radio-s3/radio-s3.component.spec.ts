import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioS3Component } from './radio-s3.component';

describe('RadioS3Component', () => {
  let component: RadioS3Component;
  let fixture: ComponentFixture<RadioS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
