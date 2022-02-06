import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',  component: LandingComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [1, 2, 3] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
