import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateServiceComponent } from './date-service.component';

describe('DateServiceComponent', () => {
  let component: DateServiceComponent;
  let fixture: ComponentFixture<DateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
