import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveQuestionComponent } from './save-question.component';

describe('SaveQuestionComponent', () => {
  let component: SaveQuestionComponent;
  let fixture: ComponentFixture<SaveQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveQuestionComponent]
    });
    fixture = TestBed.createComponent(SaveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
