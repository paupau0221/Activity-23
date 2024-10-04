import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationServiceComponent } from './localization-service.component';

describe('LocalizationServiceComponent', () => {
  let component: LocalizationServiceComponent;
  let fixture: ComponentFixture<LocalizationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
