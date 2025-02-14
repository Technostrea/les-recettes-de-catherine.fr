import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, signal, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-recipe-picture',
  standalone: true,
  imports: [],
  templateUrl: './upload-recipe-picture.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './upload-recipe-picture.component.scss'
})
export class UploadRecipePictureComponent {
  imageName = signal('');
  fileSize = signal(0);
  uploadProgress = signal(0);
  imagePreview = signal('');
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;

  selectedFile = signal<File | null>(null);
  @Output() selectedFileChange = new EventEmitter<File | null>();

  // Handler for file input change
  onFileChange(event: any): void {
    const file = event.target.files[0] as File | null;
    this.selectedFile.set(file);
    this.uploadFile(file);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.selectedFile.set(file);
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file upload
  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('image/')) {
      this.selectedFile.set(file);
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.set(e.target?.result as string); // Set image preview URL
      };
      reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
      this.imageName.set(file.name); // Set image name

      this.selectedFileChange.emit(file);
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;

    }
  }

  // Method to remove the uploaded image
  removeImage(): void {
    this.selectedFile.set(null);
    this.imageName.set('');
    this.fileSize.set(0);
    this.imagePreview.set('');
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }
}
