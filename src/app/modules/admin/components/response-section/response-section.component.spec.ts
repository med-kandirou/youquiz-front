import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSectionComponent } from './response-section.component';

describe('ResponseSectionComponent', () => {
  let component: ResponseSectionComponent;
  let fixture: ComponentFixture<ResponseSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseSectionComponent]
    });
    fixture = TestBed.createComponent(ResponseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
