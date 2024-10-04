import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringServiceComponent } from './filtering-service.component';

describe('FilteringServiceComponent', () => {
  let component: FilteringServiceComponent;
  let fixture: ComponentFixture<FilteringServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
