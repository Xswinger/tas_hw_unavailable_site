import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseButton } from './mouse-button';

describe('MouseButton', () => {
  let component: MouseButton;
  let fixture: ComponentFixture<MouseButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
