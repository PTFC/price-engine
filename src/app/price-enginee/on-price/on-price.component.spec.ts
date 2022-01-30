import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPriceComponent } from './on-price.component';

describe('OnPriceComponent', () => {
  let component: OnPriceComponent;
  let fixture: ComponentFixture<OnPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
