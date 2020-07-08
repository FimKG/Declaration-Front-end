import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { Declare_Service } from './_service/declare-service.service';
import { AdminLayoutComponent } from './Admin-Panel/admin-layout/admin-layout.component';
import { DeclareComponent } from './Admin-Panel/declare/declare.component';
import { ViewItemsComponent } from './Admin-Panel/view-items/view-items.component';
import { NavigationComponent } from './Admin-Panel/navigation/navigation.component';
import { RegisterComponent } from './Admin-Panel/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminComponent,
    TestingComponent,
    AdminLayoutComponent,
    DeclareComponent,
    ViewItemsComponent,
    NavigationComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [ AdminComponent],
  providers: [
    Declare_Service
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule{}
