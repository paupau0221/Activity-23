import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingServiceComponent } from './error-handling-service.component';

describe('ErrorHandlingServiceComponent', () => {
  let component: ErrorHandlingServiceComponent;
  let fixture: ComponentFixture<ErrorHandlingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
