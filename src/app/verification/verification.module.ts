import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterModule } from '@angular/router';
import { routes } from './verification.routing';

@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VerificationModule { }
