import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueStudentComponent } from './statistique-student.component';

describe('StatistiqueStudentComponent', () => {
  let component: StatistiqueStudentComponent;
  let fixture: ComponentFixture<StatistiqueStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueStudentComponent]
    });
    fixture = TestBed.createComponent(StatistiqueStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
