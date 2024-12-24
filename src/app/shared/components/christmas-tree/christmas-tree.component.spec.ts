import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasTreeComponent } from './christmas-tree.component';

describe('ChristmasTreeComponent', () => {
  let component: ChristmasTreeComponent;
  let fixture: ComponentFixture<ChristmasTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChristmasTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
