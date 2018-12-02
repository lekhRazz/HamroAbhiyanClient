import { TestBed, inject } from '@angular/core/testing';

import { AwarenessService } from './awareness.service';

describe('AwarenessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwarenessService]
    });
  });

  it('should be created', inject([AwarenessService], (service: AwarenessService) => {
    expect(service).toBeTruthy();
  }));
});
