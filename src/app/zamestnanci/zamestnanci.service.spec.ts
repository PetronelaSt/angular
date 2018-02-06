import { TestBed, inject } from '@angular/core/testing';

import { ZamestnanciService } from './zamestnanci.service';

describe('ZamestnanciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZamestnanciService]
    });
  });

  it('should be created', inject([ZamestnanciService], (service: ZamestnanciService) => {
    expect(service).toBeTruthy();
  }));
});
