import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringServiceComponent } from './string-service.component';

describe('StringServiceComponent', () => {
  let component: StringServiceComponent;
  let fixture: ComponentFixture<StringServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
