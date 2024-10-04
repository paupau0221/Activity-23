import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayServiceComponent } from './array-service.component';

describe('ArrayServiceComponent', () => {
  let component: ArrayServiceComponent;
  let fixture: ComponentFixture<ArrayServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
