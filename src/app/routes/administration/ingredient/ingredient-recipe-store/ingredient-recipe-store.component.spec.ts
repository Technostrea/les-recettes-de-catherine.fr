import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientRecipeStoreComponent } from './ingredient-recipe-store.component';

describe('IngredientRecipeStoreComponent', () => {
  let component: IngredientRecipeStoreComponent;
  let fixture: ComponentFixture<IngredientRecipeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientRecipeStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientRecipeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
