import { TestBed, inject } from '@angular/core/testing';

import { PubsService } from './pubs.service';

describe('PubsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubsService]
    });
  });

  it('should be created', inject([PubsService], (service: PubsService) => {
    expect(service).toBeTruthy();
  }));
});
