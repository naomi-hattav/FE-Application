import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Incident{
  id :number;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class IncidentService {
private incidents$ = new BehaviorSubject<Incident[]>([]);

constructor() {
   // מדמה טעינה מהשרת
    const mockData: Incident[] = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Incident #${i + 1}`,
      severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as Incident['severity'],
      description: `This is incident #${i + 1}`
    }));

    this.incidents$.next(mockData);
}

getIncidents():Observable<Incident[]>{
 return  this.incidents$.asObservable()
}
}
