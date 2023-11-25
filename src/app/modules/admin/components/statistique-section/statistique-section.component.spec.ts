import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueSectionComponent } from './statistique-section.component';

describe('StatistiqueSectionComponent', () => {
  let component: StatistiqueSectionComponent;
  let fixture: ComponentFixture<StatistiqueSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueSectionComponent]
    });
    fixture = TestBed.createComponent(StatistiqueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
