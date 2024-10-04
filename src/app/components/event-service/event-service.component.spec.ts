import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventServiceComponent } from './event-service.component';

describe('EventServiceComponent', () => {
  let component: EventServiceComponent;
  let fixture: ComponentFixture<EventServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
