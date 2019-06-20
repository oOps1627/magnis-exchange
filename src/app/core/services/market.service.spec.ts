import { TestBed } from '@angular/core/testing';

import { MerketService } from './market.service';

describe('MerketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerketService = TestBed.get(MerketService);
    expect(service).toBeTruthy();
  });
});
