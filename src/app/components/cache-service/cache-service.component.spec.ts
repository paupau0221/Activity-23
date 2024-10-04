import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheServiceComponent } from './cache-service.component';

describe('CacheServiceComponent', () => {
  let component: CacheServiceComponent;
  let fixture: ComponentFixture<CacheServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
