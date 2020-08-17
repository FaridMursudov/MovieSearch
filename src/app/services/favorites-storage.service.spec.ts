import { TestBed } from '@angular/core/testing';

import { FavoritesStorageService } from './favorites-storage.service';

describe('FavoritesStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesStorageService = TestBed.get(FavoritesStorageService);
    expect(service).toBeTruthy();
  });
});
