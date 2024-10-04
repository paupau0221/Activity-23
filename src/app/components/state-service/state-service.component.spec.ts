import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateServiceComponent } from './state-service.component';

describe('StateServiceComponent', () => {
  let component: StateServiceComponent;
  let fixture: ComponentFixture<StateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
