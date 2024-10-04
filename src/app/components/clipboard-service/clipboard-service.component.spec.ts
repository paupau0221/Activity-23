import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardServiceComponent } from './clipboard-service.component';

describe('ClipboardServiceComponent', () => {
  let component: ClipboardServiceComponent;
  let fixture: ComponentFixture<ClipboardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipboardServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
