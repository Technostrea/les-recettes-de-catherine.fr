import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailRecipeResolver } from './detail-recipe.resolver';

describe('detailRecipeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailRecipeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
