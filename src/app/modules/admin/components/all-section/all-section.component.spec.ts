import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSectionComponent } from './all-section.component';

describe('AllSectionComponent', () => {
  let component: AllSectionComponent;
  let fixture: ComponentFixture<AllSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSectionComponent]
    });
    fixture = TestBed.createComponent(AllSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
