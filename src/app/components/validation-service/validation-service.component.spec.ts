import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationServiceComponent } from './validation-service.component';

describe('ValidationServiceComponent', () => {
  let component: ValidationServiceComponent;
  let fixture: ComponentFixture<ValidationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
