/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AsientoService } from './asiento.service';

describe('Service: Asiento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsientoService]
    });
  });

  it('should ...', inject([AsientoService], (service: AsientoService) => {
    expect(service).toBeTruthy();
  }));
});
