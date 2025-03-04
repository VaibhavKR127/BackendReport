import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { VulnerabilityFoundComponent } from './components/vulnerability-found/vulnerability-found.component';
import { TestComponent } from './components/test/test.component';
import { VulnerabilitySetComponent } from './components/vulnerability-set/vulnerability-set.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VulnerabilityFoundComponent,
    TestComponent,
    VulnerabilitySetComponent,
    ServiceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    DropdownModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
