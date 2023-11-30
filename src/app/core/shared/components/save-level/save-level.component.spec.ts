import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLevelComponent } from './save-level.component';

describe('SaveLevelComponent', () => {
  let component: SaveLevelComponent;
  let fixture: ComponentFixture<SaveLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveLevelComponent]
    });
    fixture = TestBed.createComponent(SaveLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
