import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStoreComponent } from './recipe-store.component';

describe('RecipeStoreComponent', () => {
  let component: RecipeStoreComponent;
  let fixture: ComponentFixture<RecipeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
