import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { customTitleResolver } from './custom-title.resolver';

describe('customTitleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => customTitleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
