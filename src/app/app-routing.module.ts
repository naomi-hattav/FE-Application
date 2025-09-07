import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
