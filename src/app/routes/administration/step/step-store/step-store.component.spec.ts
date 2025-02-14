import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepStoreComponent } from './step-store.component';

describe('StepStoreComponent', () => {
  let component: StepStoreComponent;
  let fixture: ComponentFixture<StepStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
