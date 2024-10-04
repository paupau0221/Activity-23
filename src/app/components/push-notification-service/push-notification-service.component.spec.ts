import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationServiceComponent } from './push-notification-service.component';

describe('PushNotificationServiceComponent', () => {
  let component: PushNotificationServiceComponent;
  let fixture: ComponentFixture<PushNotificationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushNotificationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushNotificationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
