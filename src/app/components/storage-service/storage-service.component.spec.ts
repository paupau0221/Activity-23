import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageServiceComponent } from './storage-service.component';

describe('StorageServiceComponent', () => {
  let component: StorageServiceComponent;
  let fixture: ComponentFixture<StorageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
