import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationServiceComponent } from './pagination-service.component';

describe('PaginationServiceComponent', () => {
  let component: PaginationServiceComponent;
  let fixture: ComponentFixture<PaginationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
