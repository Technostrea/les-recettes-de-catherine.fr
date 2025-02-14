import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRecipePictureComponent } from './upload-recipe-picture.component';

describe('UploadRecipePictureComponent', () => {
  let component: UploadRecipePictureComponent;
  let fixture: ComponentFixture<UploadRecipePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadRecipePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadRecipePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
