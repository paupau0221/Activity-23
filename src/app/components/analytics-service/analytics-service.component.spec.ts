import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsServiceComponent } from './analytics-service.component';

describe('AnalyticsServiceComponent', () => {
  let component: AnalyticsServiceComponent;
  let fixture: ComponentFixture<AnalyticsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
