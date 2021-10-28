import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'customer',component:CustomerComponent},
  {path:'customerCreate',component:CustomerCreateComponent},
  {path:'customerEdit',component:CustomerEditComponent},
 
  {path:'package',component:PackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
