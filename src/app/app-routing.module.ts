import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyLeavesComponent } from './leave-application/my-leaves/my-leaves.component';
import { ApplyForLeaveComponent } from './leave-application/apply-for-leave/apply-for-leave.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-leaves', component: MyLeavesComponent },
  { path: 'apply-leave', component: ApplyForLeaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
