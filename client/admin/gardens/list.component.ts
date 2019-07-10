import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list.component.html'
})
export class ListGardensComponent {
  constructor(public route: ActivatedRoute) {
  }
}
