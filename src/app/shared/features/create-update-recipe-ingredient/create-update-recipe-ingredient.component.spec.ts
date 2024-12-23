import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRecipeIngredientComponent } from './create-update-recipe-ingredient.component';

describe('CreateUpdateRecipeIngredientComponent', () => {
  let component: CreateUpdateRecipeIngredientComponent;
  let fixture: ComponentFixture<CreateUpdateRecipeIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateRecipeIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateRecipeIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
