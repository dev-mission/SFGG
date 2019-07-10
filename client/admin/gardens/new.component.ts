import { Component } from '@angular/core';

import { NavigationService } from '../../shared/services';

@Component({
  templateUrl: './new.component.html'
})
export class NewGardenComponent {
  constructor(private navigation: NavigationService) {}

  onCreate() {
    this.navigation.backTo('/gardens');
  }
}
