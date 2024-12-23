import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepComponent } from './create-step.component';

describe('CreateStepComponent', () => {
  let component: CreateStepComponent;
  let fixture: ComponentFixture<CreateStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
