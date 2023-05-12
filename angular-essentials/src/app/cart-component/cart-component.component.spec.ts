import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as cartComponentComponent from './cart-component.component';

describe('CartComponentComponent', () => {
  let component: cartComponentComponent.CartComponentComponent;
  let fixture: ComponentFixture<cartComponentComponent.CartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cartComponentComponent.CartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cartComponentComponent.CartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
