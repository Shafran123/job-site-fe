import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company-dashboard/company-dashboard.component';
import { SuperadminDashboardComponent } from './dashboard/superadmin-dashboard/superadmin-dashboard.component';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    UserDashboardComponent,
    CompanyDashboardComponent,
    SuperadminDashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
