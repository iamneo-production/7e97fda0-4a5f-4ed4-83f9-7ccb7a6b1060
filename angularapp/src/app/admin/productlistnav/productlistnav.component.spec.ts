import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistnavComponent } from './productlistnav.component';

describe('ProductlistnavComponent', () => {
  let component: ProductlistnavComponent;
  let fixture: ComponentFixture<ProductlistnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
