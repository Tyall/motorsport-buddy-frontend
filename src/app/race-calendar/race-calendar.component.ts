import { Component, inject } from '@angular/core';
import { RaceEntrySimple } from './race-calendar.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-race-calendar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './race-calendar.component.html',
  styleUrl: './race-calendar.component.css'
})
export class RaceCalendarComponent {

  private apiServerUrl = environment.apiBaseUrl + `/race-calendar`;

  httpClient = inject(HttpClient);
  public raceEntries: Array<RaceEntrySimple> = [];
  public jumpTo : string = 'end';
  ngOnInit() {
    this.httpClient.get<RaceEntrySimple[]>(`${this.apiServerUrl}/season/2024`)
      .subscribe({
        next: (data: any) => {
          this.raceEntries = data;
          this.raceEntries.forEach(race => {
            race.dateEnd = new Date(race.date);
            race.dateEnd.setDate(race.dateEnd.getDate() + race.eventDuration);

            if (new Date(race.date) > new Date() && this.jumpTo === 'end') {
              this.jumpTo = race.country;
            }
          });
        }, error: (err) => console.log(err)
      });
  }
}
