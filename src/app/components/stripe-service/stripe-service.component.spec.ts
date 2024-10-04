import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeServiceComponent } from './stripe-service.component';

describe('StripeServiceComponent', () => {
  let component: StripeServiceComponent;
  let fixture: ComponentFixture<StripeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
