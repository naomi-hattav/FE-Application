import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentCardComponent } from './components/incident-card/incident-card.component';



@NgModule({
  declarations: [
    IncidentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncidentCardComponent
  ],
})
export class SharedModule { }
