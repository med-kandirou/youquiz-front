import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMediaComponent } from './save-media.component';

describe('SaveMediaComponent', () => {
  let component: SaveMediaComponent;
  let fixture: ComponentFixture<SaveMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveMediaComponent]
    });
    fixture = TestBed.createComponent(SaveMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
