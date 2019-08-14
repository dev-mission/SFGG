import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'angular-sortablejs';

import { ArrayComponent, ErrorComponent, FormComponent, ListComponent,
  ModalComponent, UploaderComponent } from '.';

@NgModule({
  declarations: [
    ArrayComponent,
    ErrorComponent,
    FormComponent,
    ListComponent,
    ModalComponent,
    UploaderComponent,
  ],
  exports: [
    ArrayComponent,
    ErrorComponent,
    FormComponent,
    ListComponent,
    ModalComponent,
    UploaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SortablejsModule,
  ],
  providers: []
})
export class SharedComponentsModule {}
