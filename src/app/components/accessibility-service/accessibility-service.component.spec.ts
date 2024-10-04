import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityServiceComponent } from './accessibility-service.component';

describe('AccessibilityServiceComponent', () => {
  let component: AccessibilityServiceComponent;
  let fixture: ComponentFixture<AccessibilityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
