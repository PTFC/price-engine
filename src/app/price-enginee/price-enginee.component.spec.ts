import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEngineeComponent } from './price-enginee.component';

describe('PriceEngineeComponent', () => {
  let component: PriceEngineeComponent;
  let fixture: ComponentFixture<PriceEngineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceEngineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceEngineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
