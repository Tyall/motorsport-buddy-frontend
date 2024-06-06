import { Routes } from '@angular/router';

import { SeriesSelectComponent } from './series-select/series-select.component';
import { RaceCalendarComponent } from './race-calendar/race-calendar.component';
import { TrackExplorerComponent } from './track-explorer/track-explorer.component';
import { DriverExplorerComponent } from './driver-explorer/driver-explorer.component';
import { StatisticsExplorerComponent } from './statistics-explorer/statistics-explorer.component';

export const routes: Routes = [ 
    { path: '', component: SeriesSelectComponent },
    { path: 'race-calendar', component: RaceCalendarComponent },
    { path: 'track-explorer', component: TrackExplorerComponent },
    { path: 'driver-explorer', component: DriverExplorerComponent },
    { path: 'statistics-explorer', component: StatisticsExplorerComponent }
];