import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyLeavesComponent } from './leave-application/my-leaves/my-leaves.component';
import { ApplyForLeaveComponent } from './leave-application/apply-for-leave/apply-for-leave.component';
import { HolidaysComponent } from './leave-application/holidays/holidays.component';

const routes: Routes = [  
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-leaves', component: MyLeavesComponent },
  { path: 'apply-leave', component: ApplyForLeaveComponent },
  { path: 'holidays', component: HolidaysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
