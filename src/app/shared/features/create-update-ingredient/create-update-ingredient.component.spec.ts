import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateIngredientComponent } from './create-update-ingredient.component';

describe('CreateUpdateIngredientComponent', () => {
  let component: CreateUpdateIngredientComponent;
  let fixture: ComponentFixture<CreateUpdateIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
