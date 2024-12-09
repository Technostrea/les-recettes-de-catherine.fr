import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRecipesComponent } from './explore-recipes.component';

describe('ExploreRecipesComponent', () => {
  let component: ExploreRecipesComponent;
  let fixture: ComponentFixture<ExploreRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
