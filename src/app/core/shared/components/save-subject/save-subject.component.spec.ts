import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSubjectComponent } from './save-subject.component';

describe('SaveSubjectComponent', () => {
  let component: SaveSubjectComponent;
  let fixture: ComponentFixture<SaveSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveSubjectComponent]
    });
    fixture = TestBed.createComponent(SaveSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
