import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasText } from './canvas-text';

describe('CanvasText', () => {
  let component: CanvasText;
  let fixture: ComponentFixture<CanvasText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
