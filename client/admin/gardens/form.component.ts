import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-garden-form',
  templateUrl: './form.component.html'
})
export class GardenFormComponent {
  @Input() record: any;
  @Input() error: any;

  photo: any = null;

  onPhotoRemove(record: any) {
    record.photoUrl = null;
    this.photo = null;
  }

  onPhotoUploaded(record: any, upload: any) {
    record.photoUrl = upload.href;
    this.photo = upload;
  }
}
