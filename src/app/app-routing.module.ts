import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [

{path:'users',component:UserListComponent},
{path:'users/:id',component:UserDetailComponent},
{path:'add-user',component:UserFormComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'**',redirectTo:'users'}];
=======

<<<<<<< HEAD
const routes: Routes = [];
>>>>>>> 401cc86 (initial commit)
=======
const routes: Routes = [
  { path: 'incidents',
     loadChildren: () => import('./features/incidents/incidents.module').then(m => m.IncidentsModule)
     },
  {
    path: '',
    redirectTo: 'incidents',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'incidents'
  }
];
>>>>>>> 07e73e5 (cyber-dashboard app)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
