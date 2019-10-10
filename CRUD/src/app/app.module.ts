import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdSidenavModule, MdTableModule, MdPaginatorModule, MdInputModule, MdDialogModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { EmployeeComponent } from "./employee.component";
import { ContractComponent } from "./contract.component";
import {LocationComponent} from "./location.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ContractComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxDatatableModule,
    MdSidenavModule, MdButtonModule, MdToolbarModule, MdTableModule, MdPaginatorModule, MdInputModule, MdDialogModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
