import { TestBed } from '@angular/core/testing';

import { AutosuggestionService } from './autosuggestion.service';

describe('AutosuggestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutosuggestionService = TestBed.get(AutosuggestionService);
    expect(service).toBeTruthy();
  });
});
