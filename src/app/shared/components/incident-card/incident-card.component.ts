import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Incident } from 'src/app/core/services/incident.service';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncidentCardComponent {
@Input() incident!: Incident;
}
