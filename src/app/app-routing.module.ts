import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [

{path:'users',component:UserListComponent},
{path:'users/:id',component:UserDetailComponent},
{path:'add-user',component:UserFormComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'**',redirectTo:'users'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
