import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientStoreComponent } from './ingredient-store.component';

describe('IngredientStoreComponent', () => {
  let component: IngredientStoreComponent;
  let fixture: ComponentFixture<IngredientStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
