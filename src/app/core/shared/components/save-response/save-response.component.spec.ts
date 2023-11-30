import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResponseComponent } from './save-response.component';

describe('SaveResponseComponent', () => {
  let component: SaveResponseComponent;
  let fixture: ComponentFixture<SaveResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveResponseComponent]
    });
    fixture = TestBed.createComponent(SaveResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
