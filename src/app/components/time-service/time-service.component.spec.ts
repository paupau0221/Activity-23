import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeServiceComponent } from './time-service.component';

describe('TimeServiceComponent', () => {
  let component: TimeServiceComponent;
  let fixture: ComponentFixture<TimeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
