import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { VulnerabilityFoundComponent } from './components/vulnerability-found/vulnerability-found.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { TestComponent } from './components/test/test.component';

import { VulnerabilitySetComponent } from './components/vulnerability-set/vulnerability-set.component';

const routes: Routes = [{path:"add",component:CompanyComponent},
                        {path:"vulf",component:VulnerabilityFoundComponent},
                        {path:"service",component:ServiceTypeComponent},
                        {path:"test",component:TestComponent},
                        {path:"",component:VulnerabilitySetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
