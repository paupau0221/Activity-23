import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingServiceComponent } from './sorting-service.component';

describe('SortingServiceComponent', () => {
  let component: SortingServiceComponent;
  let fixture: ComponentFixture<SortingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
