/**
 * Created by KirK on 09.07.2017.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { ContractComponent } from "./contract.component";
import { LocationComponent } from "./location.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee',  component: EmployeeComponent },
  { path: 'contract',  component: ContractComponent },
  { path: 'location',  component: LocationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
