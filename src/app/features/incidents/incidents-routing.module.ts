import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsComponent } from './incidents.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [ {
    path: '',
    component: IncidentsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
