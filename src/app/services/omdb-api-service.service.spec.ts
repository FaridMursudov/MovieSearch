import { TestBed } from '@angular/core/testing';

import { OmdbApiServiceService } from './omdb-api-service.service';

describe('OmdbApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmdbApiServiceService = TestBed.get(OmdbApiServiceService);
    expect(service).toBeTruthy();
  });
});
