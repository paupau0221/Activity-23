import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberServiceComponent } from './number-service.component';

describe('NumberServiceComponent', () => {
  let component: NumberServiceComponent;
  let fixture: ComponentFixture<NumberServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
