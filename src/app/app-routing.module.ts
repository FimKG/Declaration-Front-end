import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent} from './admin/admin.component';

import {TestingComponent} from './testing/testing.component';
import { AdminLayoutComponent } from './Admin-Panel/admin-layout/admin-layout.component';
import{DeclareComponent} from './Admin-Panel/declare/declare.component';

import {NavigationComponent} from './Admin-Panel/navigation/navigation.component';
import {ViewItemsComponent} from './Admin-Panel/view-items/view-items.component';
import { RegisterComponent } from './Admin-Panel/register/register.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'admin-layout', component: AdminLayoutComponent},
  {path: 'declare', component: DeclareComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'view', component: ViewItemsComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
