import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as MATERIAL_MODULES from '@angular/material';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyLeavesComponent } from './leave-application/my-leaves/my-leaves.component';
import { ApplyForLeaveComponent } from './leave-application/apply-for-leave/apply-for-leave.component';

export function mapMaterialModules() {
  return Object.keys(MATERIAL_MODULES).filter((k) => {
    let asset = MATERIAL_MODULES[k];
    return typeof asset == 'function'
      && asset.name.startsWith('Mat')
      && asset.name.includes('Module');
  }).map((k) => MATERIAL_MODULES[k]);
}
const MatModules = mapMaterialModules();


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MyLeavesComponent,
    ApplyForLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModules
  ],
  exports: [
    MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
