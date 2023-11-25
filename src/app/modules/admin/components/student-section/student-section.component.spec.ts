import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSectionComponent } from './student-section.component';

describe('StudentSectionComponent', () => {
  let component: StudentSectionComponent;
  let fixture: ComponentFixture<StudentSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSectionComponent]
    });
    fixture = TestBed.createComponent(StudentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
