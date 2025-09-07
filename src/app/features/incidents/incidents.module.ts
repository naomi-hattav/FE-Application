import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';
import { IncidentsListComponent } from './pages/incidents-list/incidents-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    IncidentsComponent,
    IncidentsListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    ScrollingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class IncidentsModule { }
