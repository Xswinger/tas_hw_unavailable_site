import { TestBed } from '@angular/core/testing';

import { OrderManager } from './order-manager';

describe('OrderManager', () => {
  let service: OrderManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
