import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentStudentComponent } from './assignment-student.component';

describe('AssignmentStudentComponent', () => {
  let component: AssignmentStudentComponent;
  let fixture: ComponentFixture<AssignmentStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentStudentComponent]
    });
    fixture = TestBed.createComponent(AssignmentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
