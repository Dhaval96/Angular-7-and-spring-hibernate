import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UtlityService } from './common/utlity-service.service';
import { DelegateService } from './common/delega-service.service';
import { HttpModule } from '@angular/http';
import { RegisrationComponent } from './regisration/regisration.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { RestaurentAddComponent } from './restaurent-add/restaurent-add.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsAddComponent } from './items-add/items-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    HttpModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponentComponent,
    RegisrationComponent,
  ],
  providers: [UtlityService,DelegateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
