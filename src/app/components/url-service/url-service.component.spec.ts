import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlServiceComponent } from './url-service.component';

describe('UrlServiceComponent', () => {
  let component: UrlServiceComponent;
  let fixture: ComponentFixture<UrlServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
