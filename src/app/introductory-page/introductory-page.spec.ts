import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductoryPage } from './introductory-page';

describe('IntroductoryPage', () => {
  let component: IntroductoryPage;
  let fixture: ComponentFixture<IntroductoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductoryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
