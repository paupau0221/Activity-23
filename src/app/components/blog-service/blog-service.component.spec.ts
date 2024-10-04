import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogServiceComponent } from './blog-service.component';

describe('BlogServiceComponent', () => {
  let component: BlogServiceComponent;
  let fixture: ComponentFixture<BlogServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
