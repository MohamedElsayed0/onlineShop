import { TestBed } from '@angular/core/testing';

import { OrderServService } from './order-serv.service';

describe('OrderServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderServService = TestBed.get(OrderServService);
    expect(service).toBeTruthy();
  });
});
