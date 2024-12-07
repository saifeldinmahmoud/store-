import { TestBed } from '@angular/core/testing';

import { ZarService } from './zar.service';

describe('ZarService', () => {
  let service: ZarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
