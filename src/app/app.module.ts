import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '@components/login/login.component';
import { RegisterComponent } from '@components/register/register.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { LayoutComponent } from '@components/layout/layout.component';
import { EmployeeDashboardComponent } from '@components/dashboard/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from '@components/dashboard/hr-dashboard/hr-dashboard.component';
import { ManagerDashboardComponent } from '@components/dashboard/manager-dashboard/manager-dashboard.component';
// Services
import { RoleService } from '@services/role.service';
import { EmployeeService } from '@services/employee.service';
import { DepartmentService } from '@services/department.service';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LayoutComponent,
    EmployeeDashboardComponent,
    HrDashboardComponent,
    ManagerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RoleService,
    EmployeeService,
    DepartmentService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}