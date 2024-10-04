import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsServiceComponent } from './google-maps-service.component';

describe('GoogleMapsServiceComponent', () => {
  let component: GoogleMapsServiceComponent;
  let fixture: ComponentFixture<GoogleMapsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
