import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-garden-form',
  templateUrl: './form.component.html'
})
export class GardenFormComponent {
  @Input() record: any;
  @Input() error: any;
}
