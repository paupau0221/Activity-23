import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiceComponent } from './modal-service.component';

describe('ModalServiceComponent', () => {
  let component: ModalServiceComponent;
  let fixture: ComponentFixture<ModalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
