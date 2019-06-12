import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtlityService {

  constructor(private route: Router) { }

  redirectTo(url) {
    this.route.navigate([url]);
  }
}
