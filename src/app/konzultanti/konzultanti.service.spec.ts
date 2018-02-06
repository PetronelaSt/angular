import { TestBed, inject } from '@angular/core/testing';

import { KonzultantiService } from './konzultanti.service';

describe('KonzultantiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KonzultantiService]
    });
  });

  it('should be created', inject([KonzultantiService], (service: KonzultantiService) => {
    expect(service).toBeTruthy();
  }));
});
