import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRecipeComponent } from './create-update-recipe.component';

describe('CreateUpdateRecipeComponent', () => {
  let component: CreateUpdateRecipeComponent;
  let fixture: ComponentFixture<CreateUpdateRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
