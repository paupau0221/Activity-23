import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentServiceComponent } from './environment-service.component';

describe('EnvironmentServiceComponent', () => {
  let component: EnvironmentServiceComponent;
  let fixture: ComponentFixture<EnvironmentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
