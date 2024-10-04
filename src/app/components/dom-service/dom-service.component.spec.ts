import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomServiceComponent } from './dom-service.component';

describe('DomServiceComponent', () => {
  let component: DomServiceComponent;
  let fixture: ComponentFixture<DomServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
