import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, debounce, debounceTime, map, Observable, startWith } from 'rxjs';
import { Incident, IncidentService } from 'src/app/core/services/incident.service';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  styleUrls: ['./incidents-list.component.scss']
})
export class IncidentsListComponent {
  searchControl  = new FormControl('');
  allIncidents$: Observable<Incident[]>;
  incidents$: Observable<Incident[]>;

   constructor(private incidentService:IncidentService){
    this.allIncidents$ = this.incidentService.getIncidents();

    this.incidents$ = combineLatest([
      this.allIncidents$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300)
      )
    ]).pipe(
      map(([incidents,searchText])=>
        incidents.filter(i=>i.title.toLowerCase().includes(searchText?.toLowerCase() || ''))
    )
    );
   }
}
